import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pregunta } from '../models/pregunta';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  url = "http://localhost:8000/api/preguntas"

  constructor(private http: HttpClient) { }

  mostrarPreguntas(){
    return this.http.get(this.url)
  }
   
  mostrarPreguntasAdministrador(): Observable<Pregunta[]>{
    return this.http.get<Pregunta[]>(this.url)
  }

  cambiarPregunta(id: any,datos:any){
    return this.http.put(this.url+"/"+id,datos)
  }
}
