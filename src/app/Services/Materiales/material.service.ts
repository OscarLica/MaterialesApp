import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { getdocs } from 'src/app/Util/Utilidades';
import {Materiales} from '../../Models/Materiales'

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  Collection:string = "Materiales"
  /** Constructor base inicialización de dependencias */
  constructor(private context: AngularFirestore) {

   }

   /** Crea un nuevo material */
  async CrearMaterial(material: Materiales): Promise<any> {
    return new Promise((resolve, reject) => {
      const result = this.context.collection(this.Collection).add(material);
      resolve(result);
    });
  }

  /** Consulta el listado de materiales */
  ListarMateriales(): Promise<Materiales[]> {
    return new Promise((resolve, reject) => {
      this.context.collection(this.Collection).get().subscribe((snap) => {
        resolve(<Materiales[]>getdocs(snap));
      });

    })
  }

  /** Obtiene un material */
  ObtieneMaterial(doc:string): Promise<Materiales[]> {
    return new Promise((resolve, reject) => {
      this.context.collection(this.Collection).doc(doc).get().subscribe((snap) => {
        resolve(<Materiales[]>getdocs(snap));
      });

    })
  }

  /** Actualiza los datos de un material */
  ActualizaMaterial(tipo:Materiales): Promise<Materiales> {
    return new Promise((resolve, reject) => {
      this.context.collection(this.Collection).doc(tipo.Id).update(tipo).then((response: any) => {
        resolve(response);
      });
    })
  }
}
