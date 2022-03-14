import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  getPaises(){
    return this.http.get<any[]>('https://restcountries.com/v3.1/lang/spa')
    .pipe( 
      map((respuesta: any[]) =>{
        return respuesta.map( pais=>{
          return{
            nombre:pais.name.common,
            codigo:pais.car.signs[0]
          }
        } )
      })
       )
  }
}

