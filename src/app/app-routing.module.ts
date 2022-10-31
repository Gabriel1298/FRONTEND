import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditSkillComponent } from './componentes/hard-soft-skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './componentes/hard-soft-skills/new-skill/new-skill.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'editaexp/:id',component:EditExperienciaComponent},
  {path:'nuevaedu',component:NeweducacionComponent},
  {path:'editedu/:id',component:EditeducacionComponent},
  {path:'nuevaskill',component:NewSkillComponent}, //edithys
  {path:'edithys/:id',component:EditSkillComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
