import { Injectable } from '@angular/core';
import { strict } from 'assert';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {
  }

 
    /**
     *Mesaje de guardado satisfactorio
    */
    createMessageDataSuccess(){
      this.toastr.success('El registro ha sido guardado correctamente','Satisfactorio!' ,{
        timeOut:3000
      });
    }  
    
     /**
     *Mesaje de guardado satisfactorio
    */
   registroExiste(key=""){
     key = key ? key :"identificador";
    this.toastr.error("Ya existe un registro con el " + key + " indicado.",'El registro ya existe!' ,{
      timeOut:3000
    });
  }  
    
    /**
     * Mensaje de actualizado  satisfactorio
     */
    updateMessageDataSuccess(){
      this.toastr.info('El registro ha sido actualizado correctamente','Satisfactorio!' ,{
        timeOut:3000
      });
    }  

    /**
     * Mensaje de baja satisfactorio 
     */
    deleteMessageDataSuccess(){
      this.toastr.warning('El registro ha sido dado de baja','Satisfactorio!',{
        timeOut:3000
      });
    } 
    
    /**
     * Mensaje de error
     */
    errorMessage(){
      this.toastr.error('Ha ocurrido un error, intentelo nuevamente','Error!', {
        timeOut:3000
      });
    }   
   
}
