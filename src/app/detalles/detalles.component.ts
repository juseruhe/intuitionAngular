import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioPreguntaService } from '../servicios/usuario-pregunta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  preguntas: any;

  constructor(private service: UsuarioPreguntaService,
    @Inject(MAT_DIALOG_DATA) public mostrarUsuario: any, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.mostrarRespuestas(this.mostrarUsuario.id)
    .subscribe(respuesta => {
       this.preguntas = respuesta
    }, error => {
      alert(error.status)
    })
  }

}
