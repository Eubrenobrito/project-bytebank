import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto bytebank angular';
  // destino: number;
  // valor: number;
  // nome:string;
  transferencia: any;

  transferir($event){
    console.log($event);
    // this.destino = $event.destino;
    // this.valor = $event.valor;
    // this.nome = $event.nome;
    this.transferencia = $event;
  }
}
