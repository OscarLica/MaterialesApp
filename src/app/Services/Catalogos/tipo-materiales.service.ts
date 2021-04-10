import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { getdocs } from 'src/app/Util/Utilidades';
import {TipoMaterial } from '../../Models/TipoMaterial'
import { Observable, combineLatest, Subject} from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TipoMaterialesService {

  Collection:string = "TipoMateriales"

  /**Subject del tipo material */
  private tMaterial$:Subject<TipoMaterial[]>;

  /**
   *  Constructor base inicializa dependencias
   * @param context Contexto de base de datos de FireStore
   */
  constructor(private context: AngularFirestore) {

   }

   /**
    * 
    * @returns Obtiene el tipo de material
    */
   getObservable$():Observable<TipoMaterial[]>{
    return this.tMaterial$.asObservable();
  }

  /**
   *  Ingresa un nuevo registro del tipo TipoMaterial
   * @param tipo Entidad tipo de material a insertar
   * @returns devuvel la entidad ingresada
   */
  async CrearTipo(tipo: TipoMaterial): Promise<any> {
    return new Promise((resolve, reject) => {
      const result = this.context.collection(this.Collection).add(tipo);
      resolve(result);
    });
  }

    /**
     *  Consulta todas las entidad de la entidad tipo de material
     * @returns Devuelve un observable del tipo TipoMaterial
     */
    ListarTipo(): Observable<TipoMaterial[]> {

     return this.context.collection(this.Collection).get().pipe(
      map(({docs}) => {
            return docs.map(a => {
                const data = a.data() as TipoMaterial;
                data.Id = a.id;
                return data;
            });
          }) 
      );
    }

  /**
   *  Deveulve un observabable de la entidad TipoMaterial
   * @param doc identificador de la entidad
   * @returns 
   */
  ObtieneTipo(doc:string): Observable<TipoMaterial> {

    return this.context.collection(this.Collection).doc(doc).get().pipe(
      map((data) => { 
        const tMaterial = data.data() as TipoMaterial;
        tMaterial.Id = data.id;
        return tMaterial;
      })
    );

  }

  /**
   *  Actualiza la entidad tupo de material
   * @param tipo entidad tipo de material a actualizar
   * @returns 
   */
  ActualizaTipo(tipo:TipoMaterial): Promise<TipoMaterial> {
    return new Promise((resolve, reject) => {
      this.context.collection(this.Collection).doc(tipo.Id).update(tipo).then((response: any) => {
        resolve(response);
      });
    })
  }

}
