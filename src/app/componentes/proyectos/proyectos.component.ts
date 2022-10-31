import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  colorFondoPROItem:string="#FFC400"; // cambiar color de fondo del item
  tituloProyect:string="Proyectos"; // Valor del titulo de la section "Proyectos";
  backgroundColorPROY:string="#FFC400"; // color de fondo de la section "Proyectos";
  sizeTitleSection:string="40px"; //tamanio del titulo de la section "Proyectos";
  colordeltitulo:string="blue"; // color del titulo de la section "Proyectos";
  
}
