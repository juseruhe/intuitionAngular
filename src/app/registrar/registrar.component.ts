import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { PaisService } from '../servicios/pais.service';
import { PreguntasService } from '../servicios/preguntas.service';
import { MatDialog } from '@angular/material/dialog';
import {RegistroInvalidoComponent} from '../registro-invalido/registro-invalido.component'
import { Router} from '@angular/router'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  usuarioForm !: FormGroup
  paises: any
  preguntas: any
  formData = new FormData();
  imagen: any

  constructor(private paisService: PaisService,private formBuilder: FormBuilder,
    private preguntasService: PreguntasService, public dialog: MatDialog,
    private service: UsuarioService,private ruta: Router) { }

  ngOnInit(): void {
    
    
    this.paisService.mostrarPaises().subscribe(respuesta => {
      this.paises = respuesta
      console.log(respuesta)
    }, error => {
      console.log(error)
      alert('Error con mostrar los paises-> '+error.status)
    })

    this.preguntasService.mostrarPreguntas().subscribe(respuesta => {
      this.preguntas = respuesta
      console.log(respuesta)
    }, error => {
      alert('Error con mostrar las preguntas-> '+error.status)
    })

    this.usuarioForm = this.formBuilder.group({
      nombre: ["",Validators.required],
      apellido: ["",Validators.required],
      correo: ["",Validators.required],
      indice:["",Validators.required],
      telefono:["",Validators.required],
      pais_id:["",Validators.required],
      pregunta1: ["",Validators.required],
      pregunta2: ["",Validators.required],
      pregunta3: ["",Validators.required],
      pregunta4: ["",Validators.required],
      contrasena:["",Validators.required],
      confirmar_contrasena:["",Validators.required],
      perfil: [""]

    })
  }

  imagenSeleccionada(event){
    this.imagen = event.target.files[0]
    console.log(this.imagen)
  }

  insertarUsuario(){
    if(this.usuarioForm.valid){
      if(this.usuarioForm.value.contrasena == this.usuarioForm.value.confirmar_contrasena){

        this.formData.append("nombre",this.usuarioForm.value.nombre)
        this.formData.append("apellido",this.usuarioForm.value.apellido)
        this.formData.append("correo",this.usuarioForm.value.correo)
        this.formData.append("telefono",this.usuarioForm.value.indice+this.usuarioForm.value.telefono)
        this.formData.append("pais_id",this.usuarioForm.value.pais_id)
        this.formData.append("contrasena",this.usuarioForm.value.contrasena)
        this.formData.append("pregunta1",this.usuarioForm.value.pregunta1)
        this.formData.append("pregunta2",this.usuarioForm.value.pregunta2)
        this.formData.append("pregunta3",this.usuarioForm.value.pregunta3)
        this.formData.append("pregunta4",this.usuarioForm.value.pregunta4)
        this.formData.append("perfil_nombre",this.imagen.name)
        this.formData.append("perfil",this.imagen,this.imagen.name)

        console.log(this.formData.getAll('perfil'))
     
        this.service.insertarUsuario(this.formData).subscribe(respuesta => {
          alert("Exitoso")
          console.log(respuesta)
        },error => {
        alert(error.status)
        console.log(error)
        })

         
      }else{
        this.dialog.open(RegistroInvalidoComponent);
      }
    }
  }

  irALogin(){
   this.ruta.navigateByUrl('/login')
  }

 

}
