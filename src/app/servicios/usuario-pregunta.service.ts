import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioPreguntaService {
  url = "http://localhost:8000/api/usuario_pregunta";

  constructor(private http: HttpClient) { }

  mostrarRespuestas(id){
   return this.http.get(this.url+"/"+id)
  }
}
