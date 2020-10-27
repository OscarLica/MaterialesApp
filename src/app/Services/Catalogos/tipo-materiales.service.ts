import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { getdocs } from 'src/app/Util/Utilidades';
import { TipoMaterial } from '../../Models/TipoMaterial'


@Injectable({
  providedIn: 'root'
})
export class TipoMaterialesService {

  Collection:string = "TipoMateriales"
  /** Constructor base inicialización de dependencias */
  constructor(private context: AngularFirestore) {

   }

   /** Crea un nuevo tipo */
  async CrearTipo(tipo: TipoMaterial): Promise<any> {
    return new Promise((resolve, reject) => {
      const result = this.context.collection(this.Collection).add(tipo);
      resolve(result);
    });
  }

  /** Consulta el listado de materiales */
  ListarTipo(): Promise<TipoMaterial[]> {
    return new Promise((resolve, reject) => {
      this.context.collection(this.Collection).get().subscribe((snap) => {
        resolve(<TipoMaterial[]>getdocs(snap));
      });

    })
  }

  /** Obtiene un tipo de material */
  ObtieneTipo(doc:string): Promise<TipoMaterial[]> {
    return new Promise((resolve, reject) => {
      this.context.collection(this.Collection).doc(doc).get().subscribe((snap) => {
        resolve(<TipoMaterial[]>getdocs(snap));
      });

    })
  }

  /** Actualiza los datos de un tipo */
  ActualizaTipo(tipo:TipoMaterial): Promise<TipoMaterial> {
    return new Promise((resolve, reject) => {
      this.context.collection(this.Collection).doc(tipo.Id).update(tipo).then((response: any) => {
        resolve(response);
      });
    })
  }

}
