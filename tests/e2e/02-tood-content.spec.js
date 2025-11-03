/**
 * Algseis: Kasutaja on lehel "Tehtud tööd".
 * Tegevus: Kontrollib, et tööde sisu (tekst, tabelid, lingid) kuvatakse.
 * Ootus: Lehel on nähtav vähemalt üks töö või kirjeldus.
 */

import { test, expect } from '@playwright/test';

test('Tööde sisu kuvatakse õigesti', async ({ page }) => {
  await page.goto('https://evgenytailov24.thkit.ee/content/tood.html');

  // Kontrolli, et lehe pealkiri on olemas
  await expect(page.locator('body')).toContainText(/Tehtud\s*tööd/i);

  // Kontrolli, et lehel on mingi sisu (näiteks tööde nimed, kirjed või lingid)
  const textCount = await page.locator('p, li, table, a').count();
  expect(textCount).toBeGreaterThan(0);
});
