import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  url = "http://localhost:8000/api/paises";

  constructor(private http:HttpClient) { }

  mostrarPaises(){
    return this.http.get(this.url)
  }

}
