//import { createClient } from '@supabase/supabase-js'
import axios from 'axios'
import { Compromisso, Treino, Financa, Funcionario, Player } from '../util/types'

export const api = axios.create({
  baseURL: 'https://genial-back.herokuapp.com/'
})

export const createSession = async (email: string, senha: string) => {
  return api.post('/login', { email, senha })
}

export const findUser = async () => {
  return api.get('/users/search/byEmail?email=' + localStorage.getItem('email'))
}

export const getPlayers = async () => {
  return api.get('/players')
}

export const createPlayer = async (player: Player) => {
  return api.post('/players', player)
}

export const editPlayer = async (player: Player, nome: string) => {
  return api.put(`/players/${nome}`, player)
}

export const getCompromissos = async () => {
  return api.get('/compromissos')
}

export const createCompromissos = async (compromisso: Compromisso) => {
  return api.post('/compromissos', compromisso)
}

export const editCompromissos = async (
  compromisso: Compromisso,
  uuid: string,
) => {
  return api.put(`/compromissos/${uuid}`, compromisso)
}

export const getTreinos = async () => {
  return api.get('/treinos')
}

export const createTreinos = async (treino: Treino) => {
  return api.post('/treinos', treino)
}

export const editTreinos = async (
  treino: Treino,
  uuid: string,
) => {
  return api.put(`/treinos/${uuid}`, treino)
}

export const getFinancas = async () => {
  return api.get('/financas')
}

export const createFinancas = async (financa: Financa) => {
  return api.post('/financas', financa)
}

export const editFinancas = async (financa: Financa, nome: string) => {
  return api.put(`/financas/${nome}`, financa)
}

export const getEmployee = async () => {
  return api.get('/employees')
}

export const createEmployee = async (funcionario: Funcionario) => {
  return api.post('/employees', funcionario)
}

export const editEmployee = async (funcionario: Funcionario, nome: string) => {
  return api.put(`/employees/${nome}`, funcionario)
}

/*
const supabaseUrl = 'https://txpjgrmbtobmktevwsbl.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cGpncm1idG9ibWt0ZXZ3c2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI4ODQwNTEsImV4cCI6MTk2ODQ2MDA1MX0.LBrzctTEyS7tOIu1RG9ZqP89k9vDec2wVP7S1OZZJwE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
*/