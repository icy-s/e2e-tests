# Aruanne

## ✅ Mis töötab hästi

1. Navigeerimine menüüst lehele "Tehtud tööd" töötab korrektselt.
2. Lehel kuvatakse tööde sisu (tekst, tabelid ja lingid) ilma vigadeta.
3. Menüü ja jalus on nähtavad ning sisaldavad infot või linke.
4. Kõik testitud lingid avanevad edukalt (ei ole 404 lehti).
5. Leht kohandub õigesti mobiiliseadmetes (responsiivne disain töötab).
6. Üldine laadimiskiirus ja lehe struktuur on stabiilsed.

## ⚠️ Mis vajab parandamist või tähelepanu

1. Mõned lehed ei sisalda pealkirja "Tehtud tööd" või see pole semantiliselt tähistatud `<h1>`-elemendiga.  
2. Jaluse (footer) sisu võiks olla informatiivsem — näiteks kontaktinfo või autori nimi.  
3. Puuduvad selged testimisatribuutid (`data-testid`), mis lihtsustaksid automaatsete testide loomist.  
4. Leht ei sisalda eraldi kontaktivormi ega interaktiivseid elemente (madalam testitavus).  
5. SEO ja metaandmed võiksid olla ühtsemad kogu saidil.

## 📸 Ekraanipildid ja aruanded

Playwright salvestab ekraanipildid ja videod tõrgete korral:
- Pildid: `playwright-report/screenshots/`
- Videod: `playwright-report/videos/`
- HTML aruanne: ava käsuga  
  ```bash
  npx playwright show-report