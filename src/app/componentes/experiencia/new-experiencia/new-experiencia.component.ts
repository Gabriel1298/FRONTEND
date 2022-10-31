import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE:string="";
  descripcionE:string = "";
  constructor( private sExperiencia : SExperienciaService, private router : Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia creada");
      this.router.navigate([""]);
    }, err =>{
      alert("se detecto un fallo");
      this.router.navigate([""]);
    }
    )


  }

}
