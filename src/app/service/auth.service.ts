import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwrDto } from '../Model/jwr-dto';
import { LoginUsuario } from '../Model/login-usuario';
import { NuevoUsuario } from '../Model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = "https://backendsgg.herokuapp.com/auth/";

  constructor(private httpClient: HttpClient) {

  }

  public nuevo(nuevoUsuario = NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + "nuevo", nuevoUsuario)

  }

  public login(loginUsuario : LoginUsuario): Observable<JwrDto>{

    return this.httpClient.post<JwrDto>(this.authURL + "login", loginUsuario)
  }
}
