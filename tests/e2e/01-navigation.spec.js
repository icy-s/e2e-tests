/**
 * Algseis: Kasutaja on avalehel.
 * Tegevus: Klikib lingil "Tehtud tööd".
 * Ootus: Leht /content/tood.html avaneb ja tekst "Tehtud tööd" on nähtav.
 */

import { test, expect } from '@playwright/test';

test('Navigeerimine lehele "Tehtud tööd"', async ({ page }) => {
  // Ava avaleht
  await page.goto('https://evgenytailov24.thkit.ee');

  // Klõpsa lingil (või tee midagi ainult siis, kui link on olemas)
  if (await page.locator('text=Tehtud tööd').isVisible()) {
    await page.click('text=Tehtud tööd');
  }

  // Kontrolli, et õige leht avaneb
  await expect(page).toHaveURL(/content\/tood\.html/);

  // Kontrolli, et tekst "Tehtud tööd" on kuskil nähtav
  await expect(page.locator('body')).toContainText(/Tehtud\s*tööd/i);
});
