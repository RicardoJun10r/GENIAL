import axios from "axios";

// const api = axios.create({
//     baseURL: 'https://genial-back.herokuapp.com'
// })

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

const database = [
    {
        id: 0,
        nome:'Mecanica',
        setor:'Varejo',
        data: '07/06/2013',
        descricao: 'A mecanica serve para concertar automóveis',
        produtos:[
            {
                id:'0',
                nome:'lata de tomate',
                quantidade:'30'
            },
            {
                id:'1',
                nome:'Salmão',
                quantidade:'25'
            }
        ]
    },
    {
        id: 1,
        nome:'Supermecado',
        setor:'Varejo',
        data: '25/01/2022',
        descricao: 'O supermercado mais completo e bla bla bla',
        produtos:[
            {
                id:'0',
                nome:'Morango',
                quantidade:'8'
            }
        ]
    },
    {
        id: 2,
        nome:'Galpão Mecânica',
        setor:'Varejo-mecânica',
        data: '27/05/1971',
        descricao: 'Galpão que guarda os itens da loja mecanica',
        produtos:[
            {
                id:'0',
                nome:'Desinfetante',
                quantidade:'30'
            },
            {
                id:'1',
                nome:'Álcool em gel',
                quantidade:'10'
            }
        ]
    },
    {
        id: 3,
        nome:'Galpão Supermercado',
        setor:'Varejo-supermercado',
        data: '31/12/2022',
        descricao: 'Galpão que guarda os itens do supermercado e bla bla bla',
        produtos:[
            {
                id:'0',
                nome:'Castanha',
                quantidade:'45'
            }
        ]
    }
]

/* USUARIO */
export const authenticate = async( email, password ) => 
{
    await api.post('/login', 
    { 
        email: email, 
        password: password
    })
    .then(response => {
        console.log(response.data + ' ' + response.status)
        let headerToken = response.headers.authorization;
        const token = headerToken.split(' ');
        localStorage.setItem('token', token[1]);
    })
    .catch(error => console.log(error.message))
}

export const signUp = async( nome, email, password ) => 
{
    return await api.post('/users', 
    { 
        name: nome, 
        email: email, 
        password: password 
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error.message))
}

/* ARMAZEM */

export const createStorage = async( nome, description ) => 
{
    return await api.post(
        '/storage', 
        {
            name: nome, 
            description: description
        }, 
        {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    )
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error.message)})
}

export const listStorage = async() => 
{
    return await api.get(
        '/storage',
        {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    )
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error.message)})
}

export const deleteStorage = async( nome ) => 
{
    return await api.delete(
        `/storage/${nome}`,
        {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    )
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error.message)})
}

/* PRODUTO */

export const createProduct = async ( { storage }, name, description, sector, value, quantidade ) =>
{
    return await api.post(
        '/product', 
        {
            storage: {
                id: storage.id,
            },
            name: name, 
            description: description,
            sector: sector,
            value: value,
            quantidade: quantidade
        }, 
        {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    )
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error.message)})
}

export const listProduct = async (storage) =>
{
    return await api.get(
        `/product/${storage}`,
        {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    )
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error.message)})
}

export const deleteProduct = async (storage) =>
{
    return await api.delete(
        `/product/${storage}`,
        {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    )
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error.message)})
}

export default database;