import axios from "axios";

// const api = axios.create({
//     baseURL: 'https://genial-back.herokuapp.com'
// })

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

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

export const createStorage = async( nome, description, image ) => 
{
    return await api.post(
        '/storage', 
        {
            name: nome, 
            description: description,
            image: image
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
    .then(response => 
        {
            // console.log(response.data)
            return response.data
        })
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

export const createProduct = async ( id , name, description, sector, value, quantidade ) =>
{
    await api.post(
        '/product', 
        {
            storage: {
                id: id,
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

export const listProductByName = async (name) =>
{
    return await api.get(
        `/product/search/byName?name=${name}`,
        {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    )
    .then(response => {console.log(response.data)})
    .catch(error => {console.log(error.message)})
}

export const editProduct = async ( nameProduct, name, description, sector, value, quantidade ) =>
{
    return await api.put(
        `/product/${nameProduct}`,
        {
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