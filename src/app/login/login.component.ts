import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { PaisService } from '../servicios/pais.service';
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { EsperandoComponent } from '../esperando/esperando.component';
import { DatosIncorrectosComponent } from '../datos-incorrectos/datos-incorrectos.component';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioForm !: FormGroup
  rol_id: any
  datos: any

  constructor(private ruta: Router, private service: UsuarioService, private formBuilder: FormBuilder,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      correo: ["", Validators.required],
      contrasena: ["", Validators.required]

    })
  }

  loguear() {
    if (this.usuarioForm.valid) {
      this.dialog.open(EsperandoComponent)

      this.service.loguear(this.usuarioForm.value).subscribe(respuesta => {
        console.log(respuesta)

        this.dialog.closeAll()

        this.datos = respuesta

        if (respuesta['rol_id'] == 1) {

          localStorage.setItem('Usuario', respuesta['nombre'] + " " + respuesta['apellido'])
          localStorage.setItem('id', respuesta['id'])
          this.ruta.navigateByUrl('/principal')
        }
        else if (respuesta['rol_id'] == 2) {

          localStorage.setItem('Administrador', respuesta['nombre'] + " " + respuesta['apellido'])
          localStorage.setItem('id', respuesta['id'])
          this.ruta.navigateByUrl('/administrador')
        } else if (respuesta == 0 || respuesta == null || respuesta == "") {

         this.dialog.open(DatosIncorrectosComponent)
        }

      }, error => {
        this.dialog.closeAll()
        alert(error.status)
      })
    }
  }

  irARegistrar(){
   this.ruta.navigateByUrl('/')
  }
}
