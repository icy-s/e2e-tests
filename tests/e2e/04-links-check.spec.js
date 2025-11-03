/**
 * Algseis: Kasutaja on lehel Tööd.
 * Tegevus: Kontrollib kõiki linke, et need töötaksid.
 * Ootus: Kõik lingid avanevad edukalt (HTTP vastus < 400).
 */

import { test, expect } from '@playwright/test';

test('Kõigi linkide kontroll lehel Tööd', async ({ page, request }) => {
  await page.goto('https://evgenytailov24.thkit.ee/content/tood.html');
  const links = await page.$$eval('a', as => as.map(a => a.href));

  for (const link of links) {
    const res = await request.get(link);
    expect(res.status(), `Katkine link: ${link}`).toBeLessThan(400);
  }
});