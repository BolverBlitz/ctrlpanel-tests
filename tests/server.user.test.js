// @ts-check
require('dotenv').config()
const { wait } = require('../utils');
const { test, expect } = require('@playwright/test');

test('Server Creation', async ({ page }) => {
    await page.goto(`${process.env.test_url}/servers/create`);
    await page.getByLabel('Name').fill('Playwrite CI Test');
    await page.getByRole('combobox', { name: 'Software / Games' }).selectOption('1');
    await page.getByRole('combobox', { name: 'Specification' }).selectOption('3');
    await page.getByRole('combobox', { name: 'Node' }).selectOption('1');
    await wait(1000);
    await page.locator('.btn').first().click();
    await wait(1000);
    await page.getByRole('heading', { name: 'Playwrite CI Test' }).isVisible();
});