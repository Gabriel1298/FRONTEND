import { Component, Inject, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/Persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  Persona: Persona = new Persona("","","");



  constructor(public personaService:PersonaService) {
    ;
 }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>(this.Persona = data));
  }

}
