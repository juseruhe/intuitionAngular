import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { PreguntasService } from '../servicios/preguntas.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog'
import {Pregunta} from '../models/pregunta'
import {EditarPreguntaComponent} from '../editar-pregunta/editar-pregunta.component'

@Component({
  selector: 'app-cambiar-preguntas',
  templateUrl: './cambiar-preguntas.component.html',
  styleUrls: ['./cambiar-preguntas.component.css']
})
export class CambiarPreguntasComponent implements OnInit {
  subscription: Subscription
  posicion: Number;

  constructor(private service: PreguntasService,
    private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.service.mostrarPreguntasAdministrador().subscribe(respuesta => {
     this.dataSource.data = respuesta
    })

  }

   // Clasificación
   @ViewChild(MatSort) sort: MatSort;


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
 
 
   ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
   }
 
   // Datatable
   displayedColumns: string[] = ['posicion', 'nombre','editar'];
   dataSource = new MatTableDataSource<Pregunta>([]);
 
   // Filtro
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   editarPregunta(element: any){
    this.dialog.open(EditarPreguntaComponent,{data: element})
   }


}
