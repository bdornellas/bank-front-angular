import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API_URL="http://localhost:3000";
  constructor(private httpClient:HttpClient) { }


  validarUsuario(email:String,senha:String) : Observable<Usuario>{
    const url= `${this.API_URL}/validate/usuario-small/`;
    return this.httpClient.post<Usuario>(url, {"email":email,"senha":senha});
  }
}
