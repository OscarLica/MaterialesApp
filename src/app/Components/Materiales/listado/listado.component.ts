import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Materiales } from 'src/app/Models/Materiales';
import { MaterialService } from 'src/app/Services/Materiales/material.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  filterProveedor:string = "";
  filterCategoria: string = "";
  filtro:string;
  @Input() fProveedor: string;
  MaterialesFilter: Materiales[];
  Materiales: Materiales[];
  /** migaja de pan */
  breadCrums = [
    { texto: 'Inicio', path: '' },
    { texto: 'Lista de materiales', path: '/materiales/listado' }
  ];

  /**
   *  Constructor base inicializa servicios
   * @param ServiceMaterial servioc de materiales
   */
  constructor(private ServiceMaterial: MaterialService) { }

  /**
   *  Inicializa modelos
   */
  ngOnInit(): void {
    this.Materiales = [];
    this.ServiceMaterial.ListarMateriales().subscribe((response) => {
       this.Materiales = response
    });
    
  }

}
