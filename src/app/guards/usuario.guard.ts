import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor(private service: UsuarioService,private ruta: Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.service.usuario()){
      return this.ruta.navigateByUrl('/login').then(()=> false);
    }
      return true;
  }
  
}
