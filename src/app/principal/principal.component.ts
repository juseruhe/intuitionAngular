import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../servicios/usuario.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioPreguntaService } from '../servicios/usuario-pregunta.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario = localStorage.getItem('Usuario')
  id= localStorage.getItem("id")
  usuarioDatos: any
  usuarioForm !: FormGroup
  avatar = document.getElementById('example-header-image')
  preguntas: any

  constructor(private service: UsuarioService, private formBuilder: FormBuilder,
    private usuarioPreguntaService: UsuarioPreguntaService, private ruta:Router) { }

  ngOnInit(): void {

    this.service.mostrar(this.id).subscribe(respuesta => {
      this.usuarioDatos = respuesta
      console.log(respuesta)
    }, error => {
      alert(error.status)
    })

    this.usuarioPreguntaService.mostrarRespuestas(this.id).subscribe(
      respuesta => {
        this.preguntas = respuesta
      }, error => {
        alert(error.status)
      }
    )


  }

  cerrarSesion(){
    localStorage.removeItem('Usuario')
    localStorage.removeItem('id')
    this.ruta.navigateByUrl('/login')
  }
}
