import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiales } from 'src/app/Models/Materiales';
import { Proveedor } from 'src/app/Models/Proveedor';
import { TipoMaterial } from 'src/app/Models/TipoMaterial';
import { TipoMaterialesService } from 'src/app/Services/Catalogos/tipo-materiales.service';
import { MaterialService } from 'src/app/Services/Materiales/material.service';
import { ToastService } from 'src/app/Services/Toast/toast.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent implements OnInit {

  MaterialGroup: FormGroup;

  /** Listado de proveedores */
  Proveedores: Proveedor[] = [{
    Id: "Proveedor uno",
    Nombre: "Proveedor uno"
  },
  {
    Id: "Proveedor dos",
    Nombre: "Proveedor dos"
  },
  {
    Id: "Proveedor tres",
    Nombre: "Proveedor tres"
  }
  ];
  breadCrums=[
    { texto:'Inicio', path:''},
    { texto:'Lista de materiales',  path:'/materiales/listado' },  
    { texto:'Formulario de materiales',  path:'/materiales/formulario' } 
  ];

  /** Listado de tipso de material */
  TipoMateriales: TipoMaterial[];

  /**
   *  Constructor base inicializa dependencias, servicios y demas
   * @param _activateRoute 
   * @param _router 
   * @param _fb 
   * @param ServiceMaterial 
   * @param _toastService 
   * @param ServiceTipo 
   */
  constructor(private _activateRoute: ActivatedRoute, private _router: Router, private _fb: FormBuilder, private ServiceMaterial: MaterialService, private _toastService: ToastService
    , private ServiceTipo: TipoMaterialesService) { }

  /** Inicializa controles */
  ngOnInit(): void {
    this.InitiValidation();

    this.ServiceTipo.ListarTipo().then((response) => this.TipoMateriales = response);
    const id = this._activateRoute.snapshot.paramMap.get('id');
    if (id && id !== "nuevo")
      this.ObtenerTipo(id);
  }

  /**
 *  Crea las validaciones del formulario
 */
  InitiValidation() {
    this.MaterialGroup = this._fb.group({
      Id: [''],
      Nombre: ['', [Validators.required]],
      Descripcion: ['', [Validators.required]],
      Precio: ['', [Validators.required]],
      Categoria: ['', [Validators.required]],
      Proveedor: ['', [Validators.required]],
      Unidad: ['', [Validators.required]],
      Existencia: ['', [Validators.required]]
    });
  }

  /** verifica si los controles no son validos */
  get controles(): any {
    return {
      nombre: this.MaterialGroup.get('Nombre').invalid && this.MaterialGroup.get('Nombre').touched,
      descripcion: this.MaterialGroup.get('Descripcion').invalid && this.MaterialGroup.get('Descripcion').touched,
      precio: this.MaterialGroup.get('Precio').invalid && this.MaterialGroup.get('Precio').touched,
      categoria: this.MaterialGroup.get('Categoria').invalid && this.MaterialGroup.get('Categoria').touched,
      proveedor: this.MaterialGroup.get('Proveedor').invalid && this.MaterialGroup.get('Proveedor').touched,
      unidad: this.MaterialGroup.get('Unidad').invalid && this.MaterialGroup.get('Unidad').touched,
      existencia: this.MaterialGroup.get('Existencia').invalid && this.MaterialGroup.get('Existencia').touched,
    };
  }

  /** Crea un nuevo material o actualiza uno ya existente */
  Guardar() {
    if (this.MaterialGroup.value.Id) {
      this.ServiceMaterial.ActualizaMaterial(<Materiales>this.MaterialGroup.value);
      this._toastService.updateMessageDataSuccess();
    }
    else {
      this.ServiceMaterial.CrearMaterial(<Materiales>this.MaterialGroup.value);
      this._toastService.createMessageDataSuccess();
    }
    this._router.navigate(['/materiales/listado']);
  }

  /**
   *  Obtiene un documento material
   * @param key  key del documento
   */
  ObtenerTipo(key: string) {

    this.ServiceMaterial.ObtieneMaterial(key)
      .then((resp) => { this.MaterialGroup.reset({ ...resp[0] }); })
      .catch(() => { });
  }
}
