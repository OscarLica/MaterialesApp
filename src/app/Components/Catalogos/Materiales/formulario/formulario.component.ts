import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoMaterial } from 'src/app/Models/TipoMaterial';
import { TipoMaterialesService } from 'src/app/Services/Catalogos/tipo-materiales.service';
import { ToastService } from 'src/app/Services/Toast/toast.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /** grupo de validación */
  tipoMaterialGroup: FormGroup;

  /** migaja de pan */
  breadCrums = [
    { texto: 'Inicio', path: '' },
    { texto: 'Listado de materiales', path: '/catalogos/listado-tipo-materiales' },
    { texto: 'Materiales', path: '/catalogos/formulario' }
  ];

  /**
   *  Constructor base inicializa dependencias, servicios.
   * @param _activateRoute 
   * @param _router 
   * @param _fb 
   * @param SericeTipo 
   * @param _toastService 
   */
  constructor(private _activateRoute: ActivatedRoute, private _router: Router, private _fb: FormBuilder, private SericeTipo: TipoMaterialesService, private _toastService: ToastService) {


  }

  /**
   *  inicializa modelos y demas controles
   */
  ngOnInit(): void {

    this.InitiValidation();
    const id = this._activateRoute.snapshot.paramMap.get('id');
    if (id && id !== "nuevo")
      this.ObtenerTipo(id);
  }

  /**
   *  Crea las validaciones del formulario
   */
  InitiValidation() {
    this.tipoMaterialGroup = this._fb.group({
      Id: [''],
      Nombre: ['', [Validators.required]],
      Codigo: ['', [Validators.required]],
    });
  }

  /** verifica si los controles no son validos */
  get controles(): any {
    return {
      nombre: this.tipoMaterialGroup.get('Nombre').invalid && this.tipoMaterialGroup.get('Nombre').touched,
      codigo: this.tipoMaterialGroup.get('Codigo').invalid && this.tipoMaterialGroup.get('Codigo').touched
    };
  }

  /**
   *  Guardar o actualiza un doc existente
   */
  Guardar() {
    
    if (this.tipoMaterialGroup.value.Id) {
      this.SericeTipo.ActualizaTipo(<TipoMaterial>this.tipoMaterialGroup.value);
      this._toastService.updateMessageDataSuccess();
    }
    else {
      this.SericeTipo.CrearTipo(<TipoMaterial>this.tipoMaterialGroup.value);
      this._toastService.createMessageDataSuccess();
    }
    this._router.navigate(['/catalogos/listado-tipo-materiales']);
  }

  /**
   * Obtiene un documento en base al key
   * @param key  key del documento
   */
  ObtenerTipo(key: string) {
    this.SericeTipo.ObtieneTipo(key)
      .then((resp) => { this.tipoMaterialGroup.reset({ ...resp[0] }); })
      .catch(() => { });
  }

}
