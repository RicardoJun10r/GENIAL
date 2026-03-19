import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UserContext } from '../../hooks/user-hook';
import { login as loginRequest } from '../../services/api';
import Login from './login';

vi.mock('../../services/api', () => ({
  login: vi.fn(),
}));

describe('Login page', () => {
  const setAuthSession = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  function renderWithProviders() {
    return render(
      <MemoryRouter>
        <UserContext.Provider
          value={{
            user: null,
            token: null,
            isAuthenticated: false,
            setAuthSession,
            clearAuthSession: vi.fn(),
            setUser: vi.fn(),
          }}
        >
          <Login />
        </UserContext.Provider>
      </MemoryRouter>,
    );
  }

  it('deve autenticar e salvar sessão com sucesso', async () => {
    loginRequest.mockResolvedValue({
      token: 'token',
      user: { id: 'u1', email: 'user@genial.com' },
    });

    renderWithProviders();

    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'user@genial.com' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => {
      expect(loginRequest).toHaveBeenCalledWith('user@genial.com', '123456');
      expect(setAuthSession).toHaveBeenCalledWith({
        token: 'token',
        user: { id: 'u1', email: 'user@genial.com' },
      });
    });
  });

  it('deve exibir erro amigável quando login falhar', async () => {
    loginRequest.mockRejectedValue(new Error('Credenciais inválidas'));

    renderWithProviders();

    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'user@genial.com' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    expect(await screen.findByText('Credenciais inválidas')).toBeInTheDocument();
  });
});
