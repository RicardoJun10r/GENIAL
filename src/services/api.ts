// //import { createClient } from '@supabase/supabase-js'
// import axios from 'axios'
// import { User, Storage, Product} from '../util/types'

// export const api = axios.create({
//   baseURL: 'https://genial-back.herokuapp.com/'
// })

// // export const createSession = async (email: string, senha: string) => {
// //   return api.post('/login', { email, senha })
// // }

// // export const findUser = async () => {
// //   return api.get('/users/search/byEmail?email=' + localStorage.getItem('email'))
// // }

// export const createUser = async (user: User) => {
//   return api.post('user', user)
// }

// export const getStorage = async () => {
//   return api.get('/storage')
// }

// export const createStorage = async (storage: Storage) => {
//   return api.post('/storage', storage)
// }

// export const getProducts = async () => {
//   return api.get('/products')
// }

// export const createProducts = async (product: Product) => {
//   return api.post('/product', product)
// }

// // /*
// // const supabaseUrl = 'https://txpjgrmbtobmktevwsbl.supabase.co'
// // const supabaseKey =
// //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cGpncm1idG9ibWt0ZXZ3c2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI4ODQwNTEsImV4cCI6MTk2ODQ2MDA1MX0.LBrzctTEyS7tOIu1RG9ZqP89k9vDec2wVP7S1OZZJwE'
// // const supabase = createClient(supabaseUrl, supabaseKey)

// // export default supabase
// // */