import axios from 'axios';
import { clearSessionStorage, getStoredToken } from './session';

export const AUTH_UNAUTHORIZED_EVENT = 'genial:auth-unauthorized';

const DEFAULT_API_BASE_URL = 'http://localhost:8080/api/v1';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || DEFAULT_API_BASE_URL,
});

function decodeBase64Url(value) {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);

  if (typeof atob === 'function') {
    return atob(padded);
  }

  return Buffer.from(padded, 'base64').toString('binary');
}

function decodeJwtPayloadSegment(segment) {
  const binary = decodeBase64Url(segment);

  try {
    const escaped = Array.from(binary)
      .map((char) => `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`)
      .join('');

    return decodeURIComponent(escaped);
  } catch {
    return binary;
  }
}

function extractUserFromToken(token) {
  if (!token || !token.includes('.')) {
    return null;
  }

  try {
    const payload = JSON.parse(decodeJwtPayloadSegment(token.split('.')[1]));

    const possibleId = payload.id || payload.userId || payload.uid || null;
    const possibleSub = payload.sub || null;
    const possibleEmail =
      payload.email ||
      (typeof possibleSub === 'string' && possibleSub.includes('@') ? possibleSub : null);

    return {
      id: possibleId || (possibleSub && !possibleSub.includes('@') ? possibleSub : null),
      email: possibleEmail,
      name: payload.name || payload.preferred_username || null,
    };
  } catch {
    return null;
  }
}

export function normalizeApiError(error) {
  const status = error?.response?.status || 0;
  const data = error?.response?.data;

  const message =
    data?.detail || data?.message || error?.message || 'Falha inesperada na comunicação com a API.';

  const normalized = new Error(message);
  normalized.status = status;
  normalized.data = data;

  return normalized;
}

api.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    const headers = config.headers || {};
    headers.Authorization = `Bearer ${token}`;
    config.headers = headers;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      clearSessionStorage();

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(AUTH_UNAUTHORIZED_EVENT));
      }
    }

    return Promise.reject(normalizeApiError(error));
  },
);

function normalizeAuthPayload(data) {
  const token = data?.token || data?.accessToken || data?.access_token || data?.jwt || null;

  if (!token) {
    throw new Error('Resposta de login sem token de autenticação.');
  }

  const user = data?.user || extractUserFromToken(token) || null;

  return { token, user };
}

/* AUTENTICAÇÃO / USUÁRIO */

export async function login(email, password) {
  const { data } = await api.post('/auth/login', { email, password });
  return normalizeAuthPayload(data);
}

export async function registrar(name, email, password) {
  const { data } = await api.post('/users', { name, email, password });
  return data;
}

export async function getUserById(id) {
  if (!id) {
    throw new Error('ID de usuário não informado.');
  }

  const { data } = await api.get(`/users/${id}`);
  return data;
}

export async function getUserStorages(id) {
  const user = await getUserById(id);
  return Array.isArray(user?.storages) ? user.storages : [];
}

/* ARMAZÉM */

export async function addStorageOnUser(idUser, name, description) {
  const payload = {
    name,
    description,
  };

  if (idUser) {
    payload.userId = idUser;
  }

  const { data } = await api.post('/storages', payload);
  return data;
}

export async function getStorage(name) {
  const { data } = await api.get('/storages', {
    params: { name },
  });

  return data;
}

export async function getStorageById(id) {
  const { data } = await api.get(`/storages/${id}`);
  return data;
}

/* PRODUTO */

export async function addProduct(idStorage, name, description, sector, value, quantidade) {
  const payload = {
    name,
    description,
    sector,
    value: Number(value),
    quantidade: Number(quantidade),
  };

  const { data } = await api.post(`/products/storages/${idStorage}`, payload);
  return data;
}

export async function updateProduct(dto) {
  if (!dto?.id) {
    throw new Error('Produto sem ID para atualização.');
  }

  const payload = {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    sector: dto.sector,
    value: Number(dto.value),
    quantidade: Number(dto.quantidade),
  };

  const { data } = await api.put(`/products/${dto.id}`, payload);
  return data;
}

export async function deleteProduct(id) {
  const { data } = await api.delete(`/products/${id}`);
  return data;
}

// Legado: mantido para compatibilidade em partes antigas
export async function buscar(email) {
  if (!email) return [];

  const storage = await getStorage(email);
  return Array.isArray(storage) ? storage : [];
}
