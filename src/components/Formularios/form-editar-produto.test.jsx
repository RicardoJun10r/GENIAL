import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { deleteProduct, updateProduct } from '../../services/api';
import { VerProduto } from './form-editar-produto';

vi.mock('../../services/api', () => ({
  updateProduct: vi.fn(),
  deleteProduct: vi.fn(),
}));

describe('VerProduto form', () => {
  const produto = {
    id: 'p1',
    name: 'Mouse',
    description: 'Mouse gamer',
    sector: 'TI',
    value: 120,
    quantidade: 2,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve atualizar produto com payload correto', async () => {
    updateProduct.mockResolvedValue({ ...produto, name: 'Mouse Pro' });

    render(<VerProduto produto={produto} />);

    fireEvent.change(screen.getByLabelText(/nome/i), {
      target: { value: 'Mouse Pro' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Editar' }));

    await waitFor(() => {
      expect(updateProduct).toHaveBeenCalledWith({
        id: 'p1',
        name: 'Mouse Pro',
        description: 'Mouse gamer',
        sector: 'TI',
        value: 120,
        quantidade: 2,
      });
    });
  });

  it('deve excluir produto ao clicar em excluir', async () => {
    deleteProduct.mockResolvedValue({ success: true });

    render(<VerProduto produto={produto} />);

    fireEvent.click(screen.getByRole('button', { name: 'Excluir' }));

    await waitFor(() => {
      expect(deleteProduct).toHaveBeenCalledWith('p1');
    });
  });
});
