import { expect, test } from '@playwright/test';

test.describe('Genial Inventory - fluxos críticos', () => {
  test.beforeEach(async ({ page }) => {
    const storages = [
      {
        id: 's1',
        name: 'Central',
        description: 'Armazém principal',
      },
    ];

    let products = [
      {
        id: 'p1',
        name: 'Notebook Pro',
        description: 'Modelo inicial',
        sector: 'TI',
        value: 1500,
        quantidade: 3,
      },
    ];

    await page.route('**/api/v1/auth/login', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          token: 'token-fake',
          user: {
            id: 'u1',
            email: 'usuario@genial.com',
            name: 'Usuário Teste',
          },
        }),
      });
    });

    await page.route('**/api/v1/users/u1', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'u1',
          email: 'usuario@genial.com',
          name: 'Usuário Teste',
          storages,
        }),
      });
    });

    await page.route('**/api/v1/storages', async (route) => {
      if (route.request().method() === 'POST') {
        const body = route.request().postDataJSON() as { name: string; description?: string };

        storages.push({
          id: `s${storages.length + 1}`,
          name: body.name,
          description: body.description || '',
        });

        await route.fulfill({
          status: 201,
          contentType: 'application/json',
          body: JSON.stringify(storages[storages.length - 1]),
        });
        return;
      }

      await route.fallback();
    });

    await page.route('**/api/v1/storages/s1', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 's1',
          name: 'Central',
          description: 'Armazém principal',
          products,
        }),
      });
    });

    await page.route('**/api/v1/products/storages/s1', async (route) => {
      const body = route.request().postDataJSON() as {
        name: string;
        description: string;
        sector: string;
        value: number;
        quantidade: number;
      };

      const created = {
        ...body,
        id: `p${products.length + 1}`,
      };

      products = [...products, created];

      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify(created),
      });
    });

    await page.route('**/api/v1/products/*', async (route) => {
      const url = new URL(route.request().url());
      const id = url.pathname.split('/').pop();

      if (route.request().method() === 'PUT') {
        const body = route.request().postDataJSON() as {
          id: string;
          name: string;
          description: string;
          sector: string;
          value: number;
          quantidade: number;
        };

        products = products.map((product) => (product.id === id ? { ...product, ...body } : product));

        const updated = products.find((product) => product.id === id);

        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(updated),
        });
        return;
      }

      if (route.request().method() === 'DELETE') {
        products = products.filter((product) => product.id !== id);

        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true }),
        });
        return;
      }

      await route.fallback();
    });
  });

  test('deve proteger rota privada sem sessão', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible();
  });

  test('deve executar login e CRUD de produto', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('E-mail').fill('usuario@genial.com');
    await page.getByLabel('Senha').fill('123456');
    await page.getByRole('button', { name: 'Entrar' }).click();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole('heading', { name: 'Seus Armazéns' })).toBeVisible();

    await page.getByRole('button', { name: 'Central' }).click();
    await expect(page).toHaveURL(/\/produtos\/s1$/);

    await page.getByRole('button', { name: 'Adicionar produto' }).click();

    await page.getByLabel('Nome do Produto').fill('Teclado Mecânico');
    await page.getByLabel('Descrição do Produto').fill('Switch azul');
    await page.getByLabel('Setor do Produto').fill('Periféricos');
    await page.getByLabel('Valor do Produto').fill('350');
    await page.getByLabel('Quantidade do Produto').fill('7');
    await page.getByRole('button', { name: /^Criar$/ }).click();

    await expect(page.getByText('Teclado Mecânico')).toBeVisible();

    await page.getByRole('button', { name: 'Visualizar' }).first().click();
    await page.locator('input#name:visible').fill('Notebook Ultra');
    await page.locator('button:visible', { hasText: 'Editar' }).click();

    await expect(page.getByText('Notebook Ultra')).toBeVisible();

    await page.getByRole('button', { name: 'Visualizar' }).first().click();
    await page.locator('button:visible', { hasText: 'Excluir' }).click();

    await expect(page.getByText('Notebook Ultra')).not.toBeVisible();
  });

  test('deve limpar sessão no logout e bloquear rota privada novamente', async ({ page }) => {
    await page.goto('/login');

    await page.getByLabel('E-mail').fill('usuario@genial.com');
    await page.getByLabel('Senha').fill('123456');
    await page.getByRole('button', { name: 'Entrar' }).click();

    await expect(page).toHaveURL(/\/$/);

    await page.getByRole('button', { name: 'Configurações' }).hover();
    await page.getByRole('button', { name: 'Log out' }).click();

    await expect(page).toHaveURL(/\/login$/);

    await page.goto('/');
    await expect(page).toHaveURL(/\/login$/);
  });
});
