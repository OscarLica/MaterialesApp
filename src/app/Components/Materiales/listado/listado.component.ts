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

  @Input() fCategoria: string;
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
    this.MaterialesFilter = [];

    this.ServiceMaterial.ListarMateriales().then((response) => {

      this.Materiales = [];
      this.MaterialesFilter = [];

      this.MaterialesFilter = response;
      this.Materiales = response
    });
  }

  /**
   *  Ejecuta un filtrado simple en el arreglo
   */

  Filter() {

    this.Materiales =this.MaterialesFilter;

    if (this.fCategoria)
      this.Materiales = this.Materiales.filter(x => x.Categoria.toLocaleLowerCase().includes(this.fCategoria.toLocaleLowerCase()))
    if (this.fProveedor)
      this.Materiales = this.Materiales.filter(x => x.Proveedor.toLocaleLowerCase().includes(this.fProveedor.toLocaleLowerCase()))


    if (!this.fCategoria && !this.fProveedor) this.Materiales = this.MaterialesFilter;
  }
}
