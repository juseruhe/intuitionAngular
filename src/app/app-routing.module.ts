import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import {RegistrarComponent} from './registrar/registrar.component'
import {UsuarioGuard} from './guards/usuario.guard'
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorGuard } from './guards/administrador.guard';

const routes: Routes = [
  {path: '',component:RegistrarComponent},
  {path:'login',component:LoginComponent},
  {path: 'principal', component:PrincipalComponent, canActivate:[UsuarioGuard]},
  {path: 'administrador',component:AdministradorComponent,canActivate:[AdministradorGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
