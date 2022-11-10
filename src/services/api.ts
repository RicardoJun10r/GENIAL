//import { createClient } from '@supabase/supabase-js'
import axios from 'axios'
import { User, Storage, Product} from '../util/types'

export const api = axios.create({
  baseURL: 'http://localhost:8080'
})

/*
const accessToken =
'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXRvckBnbWFpbC5jb20iLCJleHAiOjE2NjgxMjcxMDd9.yXqtF8gwJhjalqJ-DIHwYsKSYmMaQReoCJhgYSeJXJ0c1OJ8P-8R0Rff8OHeBg1MQZKxIqviZATRZOGGlnf5dw';

const apiUrl = 'http://localhost:8080';

axios.interceptors.request.use(
  config => {
      config?.headers?.authorization = `Bearer ${accessToken}`;
      return config;
  },
  error =>{
      return Promise.reject(error);
  }
);


//const token = JSON.parse(localStorage.getItem("token"));

// export const createSession = async (email: string, senha: string) => {
//   return api.post('/login', { email, senha })
// }

// export const findUser = async () => {
//   return api.get('/users/search/byEmail?email=' + localStorage.getItem('email'))
// }

export const createUser = async (user: User) => {
  return api.post('user', user)
}

export const getStorage = async () => {
  return api.get('/storage')
}

export const createStorage = async (storage: Storage) => {
  return api.post('/storage', storage)
}

export const editCompromissos = async (
  product: Product,
  name: string,
) => {
  return api.put(`/compromissos/${name}`, product)
}

/*
export const getProducts = async () => {
  console.log("OI GET PROSUCTS");
  return api.get('/product/Armazem Vitor')
}
*/

export const getProductsByID = async () => {
  return api.get('/product')
}

export const getProductsByName = async () => {
  console.log("OI");
  return api.get('product/search/byName?name=Pc linux')
}

export const createProducts = async (product: Product) => {
  return api.post('/product', product)
}

// /*
// const supabaseUrl = 'https://txpjgrmbtobmktevwsbl.supabase.co'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cGpncm1idG9ibWt0ZXZ3c2JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI4ODQwNTEsImV4cCI6MTk2ODQ2MDA1MX0.LBrzctTEyS7tOIu1RG9ZqP89k9vDec2wVP7S1OZZJwE'
// const supabase = createClient(supabaseUrl, supabaseKey)

// export default supabase
// */