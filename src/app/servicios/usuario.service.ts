import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "http://localhost:8000/api/usuarios";

  constructor(private http: HttpClient) { }

  insertarUsuario(datos){
    return this.http.post(this.url,datos)
  }

  loguear(datos){
    return this.http.post(this.url+"/loguear",datos)
  }

  mostrar(id: any){
    return this.http.get(this.url+"/"+id)
  }

  usuario(){
    return localStorage.getItem('Usuario');
  }

  administrador(){
    return localStorage.getItem('Administrador')
  }

  mostrarDatos(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+"/mostrar/datos")
  }
}
