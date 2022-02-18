import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transferencia} from "../models/transferencia.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private listaTransferencia: any[];
private url = 'http://localhost:3000/transferencias';


    constructor(private httpClient: HttpClient) {
    this.listaTransferencia = []
  }
  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
      return this.httpClient.get<Transferencia[]>(this.url);
  //  retorna uma requisição get para o endereço
  }

  adicionar (transferencia: any){
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }
  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}


// criando um service " ng g(de generate) s(serve) "nome da pasta"/"nome do arquivo"
