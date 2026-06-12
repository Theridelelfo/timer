# TODO - src

Questa cartella conterrà il codice applicativo (Frontend) della web app timer.

## ✅ Completato

### 1. Set up di base
- [x] Creazione della cartella `src/`
- [x] Creazione di questo file `todo.md` di tracciamento

## 🔧 Da Fare (I micro-step di sviluppo)

### 2. Struttura di Base con Sicurezza Integrata (Step 5)
- [x] Creare il file di specifica `/src/security-rules.json` per formalizzare il divieto di `innerHTML` e l'obbligo di `textContent`.
- [x] Creare lo scheletro di `index.html` implementando la Content Security Policy (CSP) restrittiva nel tag `<head>` e il collegamento ai file locali.
- [x] Creare lo scheletro di `timer.html` implementando la Content Security Policy (CSP) restrittiva nel tag `<head>` e il collegamento ai file locali.
- [ ] Creare i file segnaposto vuoti `style.css` e `timer.js` (configurato come ES Module) per soddisfare i vincoli della CSP (`'self'`).
- [ ] Validare l'ambiente nel browser (tramite DevTools di Codespaces) verificando che la CSP sia attiva e risponda correttamente.

### 2. Struttura di Base (Skeleton)
- [ ] Creare `index.html` (struttura HTML5 semantica base)
- [ ] Creare `style.css` (layout essenziale e variabili per i colori)
- [ ] Creare `timer.js` (modulo base, pronto per ospitare la logica)

### 3. Implementazione Funzionale
- [ ] Scrivere la logica matematica del timer (calcolo minuti/secondi) in `script.js`
- [ ] Collegare l'interfaccia utente (bottoni Start, Pause, Reset) agli eventi del codice
- [ ] Garantire il supporto al formato orario corretto (es. `05:09` invece di `5:9`)



📌 BUSSOLA DI TRANSIZIONE

- Nota per lo Step 6 (CI/CD): Il file index.html dovrà essere validato dalla pipeline prima del deployment.
- Nota per lo Step 8 (Sec Automation): Inserire nei passaggi futuri un controllo automatizzato della robustezza dei tag CSP.

### 3. Implementazione Funzionale (Futuro Step 9)
- [ ] Scrivere la logica matematica del timer (calcolo minuti/secondi) all'interno di `timer.js`.
- [ ] Collegare l'interfaccia utente (bottoni Start, Pause, Reset) tramite Event Listeners in `timer.js` (banditi gli attributi `onclick` inline per vincolo CSP).
- [ ] Garantire il supporto al formato orario corretto tramite test-driven development (es. `05:09`).
- [ ] Ottimizzare l'accessibilità visiva (contrasto dei colori e tag ARIA per screen reader).