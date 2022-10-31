import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[]= [];

  constructor(private educacionS:EducacionService, private tokenService: TokenService) { }
    isLogged = false;

  
  
  valortitulosection:string="Educación"; //valor para el TITULO

  
  backgroundColorEDU:any="#547462"; //variable para cambiar color de fondo del componente educacion;
  colorFondoItemEDU:any="#"+"93063E"; //variable para cambiar color de fondo item de educacion;
  colotTituloEdu:any="#C90035";
  
  
  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else{
      this.isLogged= false;
    }
  }


  cargarEducacion(): void{
    this.educacionS.lista().subscribe(data=> {this.educacion= data;}
    )
  }


  borrar(id?:number){
    if(id!=undefined){
      this.educacionS.delete(id).subscribe(
        data=>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }

}
