# TODO - test

Questa cartella contiene i test unitari automatizzati per verificare la logica matematica del timer tramite Vitest.

## ✅ Completato

### 1. Set up di base
- [x] Creazione della cartella `test/`
- [x] Creazione di questo file `todo.md` di tracciamento
- [x] Installazione di Vitest come dipendenza di sviluppo nel `package.json` per il supporto nativo a ES Modules.

---

## 🔧 Da Fare (I micro-step di sviluppo e verifica futuri)

### 2. Configurazione e Validazione Locale (Fase Corrente)
- [ ] Verificare che il comando locale `npm run test` avvii correttamente l'interfaccia interattiva di Vitest nel terminale.
- [ ] Verificare che il comando di isolamento `npm run test:run` (destinato alla CI) esegua i test una sola volta e si chiuda autonomamente.

### 3. Scrittura dei Test Unitari (Fase Applicativa - Step 9)
- [ ] Creare il file di specifica dei test `test/timer.test.js`.
- [ ] Scrivere i casi di test per la funzione di formattazione del tempo (verificare che i secondi puri vengano convertiti rigorosamente nella stringa `MM:SS`, es. 65 secondi ➔ `01:05`).
- [ ] Scrivere i casi di test per la gestione dei limiti e degli errori (es. come risponde l'algoritmo se riceve valori negativi, nulli o stringhe non numeriche).

### 4. Analisi di Qualità (QA)
- [ ] Monitorare che la suite di test rimanga stabile nel cloud quando viene invocata dal terzo cancello della pipeline GitHub Actions.