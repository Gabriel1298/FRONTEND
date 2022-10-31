import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CircleProgressComponent } from 'ng-circle-progress/lib/ng-circle-progress.component';
import { TitleSectionComponent } from '../title-section/title-section.component';
import { Input } from '@angular/core';
import { Skill } from 'src/app/Model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {

  constructor(private skillS : SkillService, private tokenService:TokenService) { }
  // bootstrap_Progres:any="45";
  // bootstrapProgres_percent:any=this.bootstrap_Progres+" %";
  // boot:any="Bootstrap 5"

  // html_Progres:any="87";
  // htmlProgres_percent:any=this.html_Progres+" %";
  // html:any="HTML 5"

  // css_Progres:any="90";
  // cssProgres_percent:any=this.css_Progres + " %";
  // css:any="CSS 3";

  // js_Progres:any="65";
  // jsProgres_percent:any=this.js_Progres + " %";
  // js:any="Javascript";


  skill: Skill[]= [];
  isLogged=false;

  

  
  backgroundColorHSS:any="#547462";//variable para cambiar color de fondo del componente skills;
  // backgroundColorEDU:any="#ff5627"; 
  
  colotTituloEdu:any="#C90035"; //variable para cambiar el color de las letras del titulo;

  valortitulosection:any="Hard & Soft Skills";

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  cargarSkills():void{
    this.skillS.lista().subscribe(
      data=>{
        this.skill = data;
      }
    )
  }

  delete(id:number){
    if(id!=undefined){
      this.skillS.delete(id).subscribe(
        data=>{
          this.cargarSkills();
        },err =>{
          alert("no se pudo borrar la skill");
        }
      )
    }
  }

}
