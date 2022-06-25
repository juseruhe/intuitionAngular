import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CambiarPreguntasComponent } from '../cambiar-preguntas/cambiar-preguntas.component';
import { EsperandoComponent } from '../esperando/esperando.component';
import { PreguntasService } from '../servicios/preguntas.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-editar-pregunta',
  templateUrl: './editar-pregunta.component.html',
  styleUrls: ['./editar-pregunta.component.css']
})
export class EditarPreguntaComponent implements OnInit {
  preguntaForm !: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public mostrarPregunta: any, private dialog: MatDialog,
    private formBuilder: FormBuilder, private service: PreguntasService,
    private _liveAnnouncer: LiveAnnouncer,) { }

  ngOnInit(): void {
    this.preguntaForm = this.formBuilder.group({
      id: ["", Validators.required],
      nombre: ["", Validators.required],

    })

    if (this.mostrarPregunta) {
      this.preguntaForm.controls["id"].setValue(this.mostrarPregunta.id)
      this.preguntaForm.controls["nombre"].setValue(this.mostrarPregunta.nombre)
    }
  }

  actualizarPregunta() {
    if (this.preguntaForm.valid) {
      this.dialog.open(EsperandoComponent)

      console.log(this.preguntaForm.value)

      this.service.cambiarPregunta(this.preguntaForm.value.id, this.preguntaForm.value)
        .subscribe(
          respuesta => {
            this.dialog.closeAll()
            this.dialog.open(CambiarPreguntasComponent)
          }, error => {
            this.dialog.closeAll()
           alert(error.error.message)
          }
        )
    }
  }

}
