export class TipoMaterial{

    /**
     *  Modelo de tipo de materiales
     * @param Id Id de la entidad
     * @param Nombre Nombr de la entidad
     * @param Codigo Código interno de la entidad
     */
    constructor(
        public Id:string,
        public Nombre:string,
        public Codigo:string
    ) {
    }
}