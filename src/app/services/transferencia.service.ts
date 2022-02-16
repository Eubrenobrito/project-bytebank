import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private listaTransferencia: any[];
  constructor() {
    this.listaTransferencia = []
  }
  get transferencias(){
    return this.listaTransferencia;
  }

  adicionar (transferencia: any){
    this.hidratar(transferencia);
    this.transferencias.push(transferencia);
  }
  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}


// criando um service " ng g(de generate) s(serve) "nome da pasta"/"nome do arquivo"
