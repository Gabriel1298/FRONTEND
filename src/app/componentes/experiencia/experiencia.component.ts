import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import {TitleSectionComponent} from '../title-section/title-section.component';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe :Experiencia[]=[];






  constructor(private sExperiencia:SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;





  backgroundColorEXP:any="#547462" //variable para cambiar color de fondo del componente experiencia;
  colorFondoExpItem:any="#5B1647"; //variable para cambiar color de fondo item de exp;
  colotTituloExp:any="#5B1647";

  valortitulosection:string="Experiencia Laboral";

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else{
      this.isLogged= false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data=> {this.expe= data;}
    )
  }

  delete(id?:number){
    if(id!=undefined){
      this.sExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo borrar la exp");
        }
      )
    }
  }

}


