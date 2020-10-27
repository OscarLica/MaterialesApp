import { Proveedor } from './Proveedor';

export class Materiales{

    /**
     * 
     * @param Id    Id de la entidad
     * @param Nombre Nombre del material
     * @param Descripcion Descripción del material
     * @param Precio Precio unitario del producto
     * @param Categoria Categoria del producto
     * @param Proveedor Proveedor del producto
     * @param UnidadMedida Unidad de medidades
     * @param Existencia Existencia en stock
     */
    constructor(
        public Id:string,
        public Nombre:string,
        public Descripcion:string,
        public Precio:number,
        public Categoria:string,
        public Proveedor:string,
        public UnidadMedida:string,
        public Existencia:number

    ) {
    }
}