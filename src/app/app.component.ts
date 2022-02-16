import { Component } from '@angular/core';
import { TransferenciaService} from './services/transferencia.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto bytebank em angular';

  constructor(private service: TransferenciaService) {}

  transferir($event){
   this.service.adicionar($event);
}
  }



// console.log($event);
// // this.destino = $event.destino;
// // this.valor = $event.valor;
// // this.nome = $event.nome;
// const transferencia = {...$event, data: new Date()};
// this.transferencias.push(transferencia);
