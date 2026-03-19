import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AUTH_UNAUTHORIZED_EVENT, api } from './api';
import { clearSessionStorage, getStoredToken, saveSession } from './session';

function getRequestInterceptor() {
  return api.interceptors.request.handlers[api.interceptors.request.handlers.length - 1];
}

function getResponseInterceptor() {
  return api.interceptors.response.handlers[api.interceptors.response.handlers.length - 1];
}

describe('api interceptors', () => {
  beforeEach(() => {
    clearSessionStorage();
  });

  afterEach(() => {
    clearSessionStorage();
    vi.restoreAllMocks();
  });

  it('deve injetar Authorization quando existir token', async () => {
    saveSession({ token: 'abc-123', user: { id: 'u1' } });

    const interceptor = getRequestInterceptor();

    const result = await interceptor.fulfilled({ headers: {} });

    expect(result.headers.Authorization).toBe('Bearer abc-123');
  });

  it('deve limpar sessão e emitir evento em erro 401', async () => {
    saveSession({ token: 'token-valido', user: { id: 'u1' } });

    const listener = vi.fn();
    window.addEventListener(AUTH_UNAUTHORIZED_EVENT, listener);

    const interceptor = getResponseInterceptor();

    await expect(
      interceptor.rejected({
        message: 'Unauthorized',
        response: { status: 401, data: { detail: 'Sessão expirada' } },
      }),
    ).rejects.toMatchObject({
      status: 401,
      message: 'Sessão expirada',
    });

    window.removeEventListener(AUTH_UNAUTHORIZED_EVENT, listener);

    expect(getStoredToken()).toBeNull();
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
