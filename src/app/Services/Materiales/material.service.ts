import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getdocs } from 'src/app/Util/Utilidades';
import {Materiales} from '../../Models/Materiales'

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  Collection:string = "Materiales"
  /**
   *  Constructor base inicializa dependencias
   * @param context Contexto de base de datos de FireStore
   */
  constructor(private context: AngularFirestore) {

   }

   /**
    *   Insertar un nuveo registro de la entidad Material
    * @param material Entidad Material a insertar
    * @returns Devuelve la entidad ingresada
    */
  async CrearMaterial(material: Materiales): Promise<any> {
    return new Promise((resolve, reject) => {
      const result = this.context.collection(this.Collection).add(material);
      resolve(result);
    });
  }

  /**
   *  Consulta el listado de Materiales
   * @returns retorna un Observable del tipo Materiales
   */
  ListarMateriales(): Observable<Materiales[]> {
    return this.context.collection(this.Collection).get().pipe(
        map(({docs}) => {
          return docs.map(a => {
            const material = a.data() as Materiales;
            material.Id = a.id;
            return material;
          })
        }
      )
     );
  }

/**
 * Obtiene un registro de la entidad Materiales
 * @param doc identificador de la entidad
 * @returns retorna un Observable del tipo entidad Materiales
 */
  ObtieneMaterial(doc:string): Observable<Materiales> {
    return this.context.collection(this.Collection).doc(doc).get().pipe(
      map((data) => {
       const material = data.data() as Materiales;
       material.Id = data.id;
       return material;
      }) 
    );
  }

  /**
   * Actualiza un documento de la entidad Materiales
   * @param tipo Entidad Materiales
   * @returns Devuelve la entidad actualizada
   */
  ActualizaMaterial(tipo:Materiales): Promise<Materiales> {
    return new Promise((resolve, reject) => {
      this.context.collection(this.Collection).doc(tipo.Id).update(tipo).then((response: any) => {
        resolve(response);
      });
    })
  }
}
