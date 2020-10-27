import { Component, OnInit } from '@angular/core';
import { TipoMaterial } from 'src/app/Models/TipoMaterial';
import { TipoMaterialesService } from 'src/app/Services/Catalogos/tipo-materiales.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  /**  migaja de pan */
  breadCrums=[
    { texto:'Inicio', path:''},
    { texto:'Lista de tipos de materiales',  path:'/catalogos/listado-tipo-materiales' }   
  ];

  /** listado de tipos de material */
  TipoMateriales:TipoMaterial[] = [];

  /** Constructor base inicializa serviciode y dependencias */
  constructor(private ServiceTipo:TipoMaterialesService) { }

  /**
   *    inicializa los modelos y controles necesarios
   */
  ngOnInit(): void {
    this.ServiceTipo.ListarTipo().then((response:TipoMaterial[]) => {

      this.TipoMateriales = [];
      this.TipoMateriales = response
    });
  }

}
