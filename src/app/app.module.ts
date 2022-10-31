import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { RedsocialLogoComponent } from './componentes/redsocial-logo/redsocial-logo.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSoftSkillsComponent } from './componentes/hard-soft-skills/hard-soft-skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { TitleSectionComponent } from './componentes/title-section/title-section.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion/editeducacion.component';
import { EditSkillComponent } from './componentes/hard-soft-skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './componentes/hard-soft-skills/new-skill/new-skill.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    RedsocialLogoComponent,
    BannerComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    TitleSectionComponent,
    ProyectosComponent,
    BarraLateralComponent,
    NavbarComponent,
    BotonComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      outerStrokeColor: "#4882c2",
      outerStrokeGradientStopColor: "#53a9ff",
      innerStrokeColor: "#e7e8ea",
      radius: 90, // radio del circulo 
      toFixed: 0,
      showTitle: true,
      showUnits: false,
      showSubtitle: true,
      showBackground: false,
      showInnerStroke: true,
      backgroundColor: "#3c3939",
      space: -10,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      animateTitle: false, 
      animationDuration: 700, // duración de la animación (milisegundos)
      clockwise: false, // el circulo se rellena en el sentido del reloj? 
      startFromZero: false,
      subtitleFontSize: "25", // tamaño de letra del subtitulo
      titleFontWeight: "700",
      titleFontSize: "20", // tamaño de letra del titulo 


    }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
