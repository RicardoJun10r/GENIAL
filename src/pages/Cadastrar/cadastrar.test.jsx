import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { registrar as registrarRequest } from '../../services/api';
import Cadastrar from './cadastrar';

vi.mock('../../services/api', () => ({
  registrar: vi.fn(),
}));

describe('Cadastrar page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function fillForm() {
    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'Usuário Teste' } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'user@genial.com' } });
    fireEvent.change(screen.getByLabelText(/^senha$/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText(/confirmar senha/i), { target: { value: '123456' } });
  }

  it('deve chamar registro com os dados válidos', async () => {
    registrarRequest.mockResolvedValue({ id: 'u1' });

    render(
      <MemoryRouter>
        <Cadastrar />
      </MemoryRouter>,
    );

    fillForm();
    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    await waitFor(() => {
      expect(registrarRequest).toHaveBeenCalledWith('Usuário Teste', 'user@genial.com', '123456');
    });
  });

  it('deve exibir erro quando API retornar falha', async () => {
    registrarRequest.mockRejectedValue(new Error('E-mail já cadastrado'));

    render(
      <MemoryRouter>
        <Cadastrar />
      </MemoryRouter>,
    );

    fillForm();
    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    expect(await screen.findByText('E-mail já cadastrado')).toBeInTheDocument();
  });
});
