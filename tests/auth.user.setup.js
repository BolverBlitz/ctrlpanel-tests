require('dotenv').config()
const setup = require('@playwright/test').test;

// Path: tests\auth.setup.js

const authFile = '.auth/user.json';

setup('Login', async ({ page }) => {
    await page.goto(`${process.env.test_url}/login`);
    await page.getByPlaceholder('Email or Username').click();
    await page.getByPlaceholder('Email or Username').fill(process.env.user_user_email);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.user_user_password);
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.waitForLoadState('load');
    await page.locator('span').filter({ hasText: /^Server$/ }).isVisible();

    await page.context().storageState({ path: authFile });
});