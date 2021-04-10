import { Observable } from "rxjs";

export interface ICrudRepository<T>{
/**Consulta un listado de T */
Consultar():Observable<T[]>;

/**Agrega una nueva entidad de T */
Agregar(Model : T) : Observable<T>;

/** Actualiza la entidad T */
Actualizar(Model : T) : Observable<T>;

/**Obtiene la entidad T por el id */
Obtener(id : number) : Observable<T>
}