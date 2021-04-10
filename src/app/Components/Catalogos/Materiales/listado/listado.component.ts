import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  /**Listado de tipos de materiales */
  TipoMateriales:TipoMaterial[];

  /**
   * Constructor base inicializa dependencias
   * @param ServiceTipo Servicio de Tipo de materiales
   */
  constructor(private ServiceTipo:TipoMaterialesService) { 
    this.TipoMateriales = [];
  }

  /**
   *    inicializa los modelos y controles necesarios
   */
  ngOnInit(): void {
    this.ServiceTipo.ListarTipo().subscribe((response:TipoMaterial[]) => {
      this.TipoMateriales = response;
    });
  }

}
