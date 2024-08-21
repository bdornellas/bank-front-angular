import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../models/contrato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  private API_URL="http://localhost:3000";
  constructor(private httpClient:HttpClient) { }


  //Crud
  cadastrarContrato(contrato: Contrato) : Observable<Contrato>{
    return this.httpClient.post<Contrato>(this.API_URL+"",contrato);
  }

  listarContratos(): Observable<Contrato[]>{
    const url= `${this.API_URL}/list/contratos`;
    return this.httpClient.get<Contrato[]>(url);
  }

  buscarContratoPorID(id: Number) : Observable<Contrato>{
    const url= `${this.API_URL}/search/contrato/${id}`;
    return this.httpClient.get<Contrato>(this.API_URL);
  }

  atualizarContratoPorID(contrato: Contrato) : Observable<Contrato>{
    const url= `${this.API_URL}/update/contrato/${contrato._id}`;
    return this.httpClient.put<Contrato>(this.API_URL,contrato);
  }

  removerContratoPorID(id: Number) : Observable<Contrato>{
    const url= `${this.API_URL}/delete/contrato/${id}`;
    return this.httpClient.delete<Contrato>(this.API_URL);
  }
}
