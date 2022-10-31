import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.css']
})
export class TitleSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() titleSection:any="Titulo de la section"; //variable para cambiar el titulo de la section;
  @Input() backgroundcolor:any;
  @Input() tamanioTitulo:any="40px" //variable para cambiar el tamanio del titulo; 
  @Input() colorTitulo:any="orange"; //variable para cambiar el color de las letras del titulo;
  backgroundColorEDU:any="#ff5627"; //variable para cambiar color de fondo del componente skills;
  
  

}
