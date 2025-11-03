/**
 * Algseis: Kasutaja on lehel "Tehtud tööd".
 * Tegevus: Kontrollib, et menüü ja jalus (footer) on nähtavad.
 * Ootus: Menüüs on linke, jaluses on kontaktinfo või autori nimi.
 */

import { test, expect } from '@playwright/test';

test('Menüü ja jaluse olemasolu', async ({ page }) => {
  await page.goto('https://evgenytailov24.thkit.ee/content/tood.html');

  // Kontrolli, et menüü on nähtav
  const menuLinks = await page.locator('nav a').count();
  expect(menuLinks).toBeGreaterThan(0);

  // Kontrolli, et jaluses on tekst või kontaktinfo
  const footerText = await page.locator('footer').textContent();
  expect(footerText?.length || 0).toBeGreaterThan(5);
});
