import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Login', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.pageGoto();
    await Login.login('standard_user', 'secret_sauce');

    await expect(page).toHaveTitle('Swag Labs');
});

test('Login em branco', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.pageGoto();
    await Login.login('', 'secret_sauce');

    await expect(page.locator('data-test=error')).toHaveText('Epic sadface: Username is required');
});

test('Senha em branco', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.pageGoto();
    await Login.login('standard_user', '');

    await expect(page.locator('data-test=error')).toHaveText('Epic sadface: Password is required');
});

test('Login e Senha em branco', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.pageGoto();
    await Login.login('', '');

    await expect(page.locator('data-test=error')).toHaveText('Epic sadface: Username is required');
});

test('Login inválido', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.pageGoto();
    await Login.login('standard', 'secret_sauce');

    await expect(page.locator('data-test=error')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Senha inválida', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.pageGoto();
    await Login.login('standard_user', 'secret');

    await expect(page.locator('data-test=error')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login e Senha inválidos', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.pageGoto();
    await Login.login('test', 'test');

    await expect(page.locator('data-test=error')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});