import {Component, EventEmitter, Output} from "@angular/core";
import {Transferencia} from "../models/transferencia.model";
import {TransferenciaService} from "../services/transferencia.service";

@Component({
  selector:'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>()
  valor: number;
  destino:number;
  nome: string;

  constructor(private service: TransferenciaService) {}

  transferir(){
    console.log('nova transferencia solicitadaS')
    const valorEmitir: Transferencia = {
                          valor: this.valor,
                          destino: this.destino,
                          nome: this.nome
                        };
    this.service.adicionar(valorEmitir).subscribe(
      resultado => {
      console.log(resultado);
      this.limparCampos();
    },
      (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
    this.nome = "";
  }

}
