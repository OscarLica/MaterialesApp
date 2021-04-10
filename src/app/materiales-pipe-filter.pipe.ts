import { Pipe, PipeTransform } from '@angular/core';
import { Materiales } from './Models/Materiales';

@Pipe({
  name: 'materialesPipeFilter'
})
export class MaterialesPipeFilterPipe implements PipeTransform {

  transform(materiales:Materiales[], filterCategoria?:string, filterProveedor?:string ) {

  if(filterCategoria)
    materiales = materiales.filter((material: Materiales) => material.Categoria.toLocaleLowerCase().indexOf(filterCategoria.toLocaleLowerCase()) !== -1)

  if(filterProveedor)
    materiales = materiales.filter((material: Materiales) => material.Proveedor.toLocaleLowerCase().indexOf(filterProveedor.toLocaleLowerCase()) !== -1)

  return materiales;
  }

}
