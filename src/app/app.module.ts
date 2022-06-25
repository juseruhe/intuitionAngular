import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { RegistrarComponent } from './registrar/registrar.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { RegistroInvalidoComponent } from './registro-invalido/registro-invalido.component';
import {MatIconModule} from '@angular/material/icon';
import { PrincipalComponent } from './principal/principal.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EsperandoComponent } from './esperando/esperando.component';
import {MatCardModule} from '@angular/material/card';
import { CambiarPreguntasComponent } from './cambiar-preguntas/cambiar-preguntas.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DatosIncorrectosComponent } from './datos-incorrectos/datos-incorrectos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { EditarPreguntaComponent } from './editar-pregunta/editar-pregunta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PresentacionComponent,
    RegistrarComponent,
    RegistroInvalidoComponent,
    PrincipalComponent,
    AdministradorComponent,
    EsperandoComponent,
    CambiarPreguntasComponent,
    DatosIncorrectosComponent,
    DetallesComponent,
    EditarPreguntaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
