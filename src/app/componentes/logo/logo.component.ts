import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  @Input() color_img:any="../../../assets/Logo-AP.png";

  

  constructor() { }

  ngOnInit(): void {
  }

}
