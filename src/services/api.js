import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

/* USUARIO */

export async function login(email, password) {
    try {
        const res = await api.post('/usuarios/login', { email, password });
        return res.data;
    } catch (err) {
        console.error("Erro ao fazer login:", err);
        throw err;
    }
}

export async function registrar(name, email, password, confirmedPassword) {
    if (password === confirmedPassword) {
        console.log(email, name, password)
        await api.post('/usuarios/registrar', {
            email: email,
            name: name,
            password: password
        }).then(res => {
            return res.data
        }).catch(err => console.log(err))
    } else {
        console.log("Erro: Senhas devem ser iguais");
    }
}

export async function buscar(email) {
    if (email !== null && email !== undefined) {
        try {
            console.log('bucando informacoes')
            const res = await api.get(`/usuarios/buscar?email=${email}`);
            console.log(res.data)
            return res.data.storages
        } catch (err) {
            console.log('Erro: ', err)
        }
    }
}

/* ARMAZEM */

export async function addStorageOnUser(id_user, name, description) {
    try {
        const res = await api.post(
            `/estoque/${id_user}`,
            {
                name: name,
                description: description,
            },
        );
        return res.data;
    } catch (err) {
        console.log("Erro ao tentar adicionar Armazem: ", err)
    }
}

export const getStorage = async (email, name) => {
    try {
        const res = await api.get(`/estoque/${email}/buscar?name=${name}`);
        return res.data;
    } catch (err) {
        console.log('Erro ao buscar Estoque: ', err)
    }
}

export const getStorageById = async (id) => {
    try {
        const res = await api.get(`/estoque/buscar?id=${id}`);
        return res.data;
    } catch (err) {
        console.log('Erro ao buscar Estoque: ', err)
    }
}

/* PRODUTO */

export async function addProduct(id_storage, name, description, sector, value, quantidade) {
    try {
        const res = await api.post(
            `/produtos/${id_storage}`,
            {
                name: name,
                description: description,
                sector: sector,
                value: value,
                quantidade: quantidade,
            },
        )
        return res;
    } catch (err) {
        console.log('Erro ao tentat adicionar Produto: ' + err)
    }
}

export async function updateProduct(dto) {
    try {
        const res = await api.put(`/produtos/atualizar`, dto);
        return res.data;
    } catch (error) {
        console.log('Erro ao atualizar produto: ', error);
    }
}

export async function deleteProduct(id) {
    try {
        const res = await api.delete(`/produtos/${id}`);
        return res.data;
    } catch (error) {
        console.log('Erro ao excluir produto: ', error);
    }
}
