export interface Root {
  transferencias: Transferencia[]
}

export interface Transferencia {
  id?: any
  valor: number
  nome: string
  destino: string | Number;
  data?: string
}
