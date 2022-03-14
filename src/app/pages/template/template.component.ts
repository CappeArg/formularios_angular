import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

listaPaises:any[]=[];
  usuario={
    nombre: 'Pablo',
    apellido:'Cappellacci',
    email:'pablocappe@gmail.com',
    pais:'',
    genero:'Masculino'
  }
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {

    this.paisService.getPaises()
    .subscribe(paises=>{ 
      
      
      this.listaPaises=paises
      this.listaPaises.unshift({
        nombre:'[Seleccione País]',
        codigo:''
      })
      console.log(paises)
    }
    );
    
  }

  guardar( forma:NgForm ){
    if(forma.invalid){
  
      Object.values(forma.controls).forEach(control=>{

        control.markAsTouched();
      })
      return;
  }

  // console.log(forma)

  }

}
