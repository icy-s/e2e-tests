# E2E Test Project for the school website evgenytailov24.thkit.ee

## ⚙️ Requirements

- **Operating systems:** Windows 10/11, macOS, or Linux  
- **Node.js:** v18 or higher  
- **npm:** v9 or higher  
- **Browsers:** Chromium, Firefox, WebKit (installed automatically via Playwright)

---

## 🚀 Installation and Running

1. Clone the repository:
```
git clone https://github.com/icy-s/e2e-tests.git
cd e2e-tests
```
   
2. Install dependencies:
```
npm install
```

3. Install Playwright browsers:
```
npx playwright install
```

4. Run all tests:
```
npx playwright test
```

5. Run tests in UI mode:
```
npx playwright test --ui
```

6. Run only E2E tests:
```
npx playwright test tests/e2e
```

---


## 🧪 Reports
An HTML report is generated after the tests complete. To open it, run:

```
npx playwright show-report
```
