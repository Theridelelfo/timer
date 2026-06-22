# TODO - src

Questa cartella conterrà il codice applicativo (Frontend) della web app timer.

## ✅ Completato

### 1. Set up di base e architettura
- [x] Creazione della cartella `src/`
- [x] Creazione di questo file `todo.md` di tracciamento
- [x] Creazione del file di specifica /src/security-rules.json (divieto di innerHTML, obbligo di textContent).

### 2. Struttura di Base con Sicurezza Integrata (Step 5)
- [x] Creare il file di specifica `/src/security-rules.json` per formalizzare il divieto di `innerHTML` e l'obbligo di `textContent`.
- [x] Creare lo scheletro di `index.html` implementando la Content Security Policy (CSP) restrittiva nel tag `<head>` e il collegamento ai file locali.
- [x] Creare lo scheletro di `timer.html` implementando la Content Security Policy (CSP) restrittiva nel tag `<head>` e il collegamento ai file locali.
- [x] Creare i file segnaposto vuoti `style.css` e `timer.js` (configurato come ES Module) per soddisfare i vincoli della CSP (`'self'`).
- [x] Validare l'ambiente nel browser (tramite DevTools di Codespaces) verificando che la CSP sia attiva e risponda correttamente.

### 3. Sviluppo dell'Interfaccia (Skeleton Semantico)
- [x] Ampliare `index.html` con la struttura HTML5 semantica base per la landing page.
- [x] Ampliare `timer.html` inserendo i tag semantici per il display del timer e i tre pulsanti di controllo.
- [x] Configurare `style.css` con il layout essenziale e le variabili CSS per la gestione dei colori.

### 4. Implementazione Funzionale (Fase Applicativa - Step 9)
## 🔧 Da Fare (I micro-step di sviluppo)
- [ ] Scrivere la logica matematica del timer (calcolo minuti/secondi) all'interno di `timer.js`.
- [ ] Collegare l'interfaccia utente (bottoni Start, Pause, Reset) tramite Event Listeners in `timer.js` (banditi gli attributi `onclick` inline per vincolo CSP).
- [ ] Garantire il supporto al formato orario corretto (es. `05:09` invece di `5:9`).
- [ ] Ottimizzare l'accessibilità visiva (contrasto dei colori e tag ARIA base per screen reader).

📌 BUSSOLA DI TRANSIZIONE

- Nota per lo Step 8 (Sec Automation): Inserire nei passaggi futuri un controllo automatizzato della robustezza dei tag CSP.