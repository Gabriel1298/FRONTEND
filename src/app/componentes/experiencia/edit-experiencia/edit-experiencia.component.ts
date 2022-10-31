import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLab: Experiencia= null;


  backgroundColorEXP:any="#93063E" //variable para cambiar color de fondo del componente experiencia;
  colorFondoExpItem:any="#5B1647"; //variable para cambiar color de fondo item de exp;
  colotTituloExp:any="#5B1647";
  valortitulosection:string="Editar experiencia";


  // "strictNullChecks": false,

  


  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data=>{
        this.expLab= data;
      },err =>{
        alert("Se producjo un error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Se producjo un error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )

  }

}
