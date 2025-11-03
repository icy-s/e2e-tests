# E2E Test Projekt kooli veebilehele evgenytailov24.thkit.ee

## ⚙️ Nõuded

- **Operatsioonsüsteemid:** Windows 10/11, macOS, või Linux  
- **Node.js:** v18 või üle
- **npm:** v9 või üle
- **Brauserid:** Chromium, Firefox, WebKit (installib automaatselt Playwrighti kaudu)

---

## 🚀 Installimine ja käivitamine

1. Kloonige repo:
   ```bash
   git clone https://github.com/icy-s/e2e-tests.git
   cd e2e-tests

2. Installi dependencies
   npm install

3. Installi Playwright brauserid
   npx playwright install

4. Käivita testid
   npx playwright test

5. Brauseri käivitamiseks (UI mode)
   npx playwright test --ui

6. Ainult E2E testid
   npx playwright test tests/e2e

## 🧪 Aruanned

Testide järel loodakse HTML-aruanne, selle vaatamiseks kirjuta:

npx playwright show-report

---