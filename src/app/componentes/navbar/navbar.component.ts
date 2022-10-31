import { Component, OnInit } from '@angular/core';
import {LogoComponent} from '../logo/logo.component';
import {BotonComponent} from '../boton/boton.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cont_boton:string="Ingresar";

}
