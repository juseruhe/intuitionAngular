import {AfterViewInit,ViewChild, Component, OnInit } from '@angular/core';
import {UsuarioService} from '../servicios/usuario.service';
import {PreguntasService} from '../servicios/preguntas.service'
import {Router} from '@angular/router'
import {UsuarioPreguntaService} from '../servicios/usuario-pregunta.service'
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog'
import {Usuario} from '../models/usuario'
import {DetallesComponent} from '../detalles/detalles.component'
import {CambiarPreguntasComponent} from '../cambiar-preguntas/cambiar-preguntas.component'

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements AfterViewInit,OnInit {
  administrador = localStorage.getItem('Administrador')
  id= localStorage.getItem("id")
  usuarios: any
  preguntas: any
  subscription: Subscription
  posicion: Number;

  constructor(private service:UsuarioService, private preguntaService:PreguntasService,
    private ruta:Router, private usuarioPreguntaService: UsuarioPreguntaService,
    private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {
 
    this.service.mostrarDatos().subscribe(respuesta => {
      this.dataSource.data = respuesta
      console.log(respuesta)
    })

  }

    // Clasificación
    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }


    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      // This example uses English messages. If your application supports
      // multiple language, you would internationalize these strings.
      // Furthermore, you can customize the message to add additional
      // details about the values being sorted.
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }
  
    // Paginación
    @ViewChild(MatPaginator) paginator: MatPaginator;
 
  
    // Datatable
    displayedColumns: string[] = ['posicion', 'nombre','apellido','pais','boton'];
    dataSource = new MatTableDataSource<Usuario>([]);
  
    // Filtro
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  cerrarSesion(){
    localStorage.removeItem('Administrador')
    localStorage.removeItem('id')
    this.ruta.navigateByUrl('/login')
  }

  cambiarPreguntas(){
    this.dialog.open(CambiarPreguntasComponent)
  }

  mostrarDatos(element: any){
  this.dialog.open(DetallesComponent,{data: element})
  }

}
