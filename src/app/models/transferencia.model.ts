export interface Root {
  transferencias: Transferencia[]
}

export interface Transferencia {
  id?: any
  Valor: number
  nome: string
  destino: string
  data?: string
}
