import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

interface errorValidate{

  [$:string ]:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }


  noCappellacci( control: FormControl): errorValidate{

    if(control.value?.toLowerCase() === 'cappellacci'){
        return {
              noCappellacci:true
            }
      
          }
          return null;
        }

        camposIguales( campo1 :string, campo2: string ) {
    
          return (control: AbstractControl): ValidationErrors | null => {
       
            const pass1 = control.get(campo1)?.value;
            const pass2 = control.get(campo2)?.value;
        
            console.log(pass1, pass2);
        
            if ( pass1 !== pass2 ) {
              control.get(campo2)?.setErrors({ noIguales: true });
              return { noIguales: true };
            }
            
            return null;
          }
        }

        existeUsuario( control: FormControl ): Promise<errorValidate> | Observable<errorValidate> {

          if( !control.value ) {
            return Promise.resolve(null);
          }
      
          return new Promise( (resolve, reject) => {
      
            setTimeout(() => {
              
              if ( control.value === 'strider' ) {
                resolve({ existe: true });
              } else {
                resolve( null );
              }
      
            }, 3500);
      
      
          });
      
        }
}

