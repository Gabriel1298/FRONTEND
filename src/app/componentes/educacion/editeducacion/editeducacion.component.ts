import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  educacionList: Educacion= null;


  backgroundColorEXP:any="#93063E" //variable para cambiar color de fondo del componente experiencia;
  colorFondoExpItem:any="#5B1647"; //variable para cambiar color de fondo item de exp;
  colotTituloExp:any="#5B1647";
  valortitulosection:string="Editar experiencia";


  // "strictNullChecks": false,

  


  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data=>{
        this.educacionList= data;
      },err =>{
        alert("Se producjo un error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacionList).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Se producjo un error al modificar la educacion");
        this.router.navigate(['']);
      }
    )

  }
}
