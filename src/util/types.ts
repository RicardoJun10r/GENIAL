export interface User {
    uuid?: string
    id: number
    email: string
    senha: string
    idade: number
  }
  
  export interface Storage {
    uuid?: string
    id: number
    descricao: String
    nome: string
    id_user: number
  }
  
  export interface Product {
    uuid?: string
    id: number
    descricao: String
    nome: string
    sector: string
    value: number
    id_storage: number
    date: Date
    quantidade: number
  }
  