/**
 * Algseis: Kasutaja avab veebilehe mobiilseadmes.
 * Tegevus: Kontrollib, et sisu kuvatakse korrektselt.
 * Ootus: Menüüd, pildid ja tekstid on nähtavad ja paigutus on korrektne.
 */

import { test, expect, devices } from '@playwright/test';

test.use(devices['iPhone 13']);

test('Veebilehe responsiivsuse kontroll mobiilis', async ({ page }) => {
  await page.goto('https://evgenytailov24.thkit.ee');
  await expect(page.getByRole('banner')).toBeVisible();
  await expect(page.getByRole('link', { name: /Tööd/i })).toBeVisible();
});