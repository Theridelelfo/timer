# TODO - test

Questa cartella contiene i test unitari automatizzati per verificare la logica matematica del timer tramite Vitest.

## ✅ Completato

### 1. Set up di base e Validazione (Step 6)
- [x] Creazione della cartella `test/`
- [x] Creazione di questo file `todo.md` di tracciamento
- [x] Installazione di Vitest come dipendenza di sviluppo nel `package.json`.
- [x] Configurazione dei comandi nel `package.json` (`test` per modalità interattiva e `test:run` per esecuzione singola in CI).
- [x] Scrittura dello **Smoke Test** iniziale nel file `test/timer.test.js` superato con successo sia localmente che nella pipeline cloud.

---

## 🔧 Da Fare (I micro-step di sviluppo e verifica futuri)

### 2. Scrittura dei Test Unitari Reali (Fase Applicativa - Step 9)
- [ ] Espandere il file `test/timer.test.js` inserendo i casi di test per la funzione di formattazione del tempo (verificare la conversione dei secondi nella stringa `MM:SS`, es. 65 secondi ➔ `01:05`).
- [ ] Scrivere i casi di test per la gestione dei limiti e degli errori (es. come risponde l'algoritmo se riceve valori negativi, nulli o stringhe non numeriche).

### 3. Analisi di Qualità Continua (QA)
- [ ] Monitorare che la suite di test rimanga stabile nel cloud man mano che l'algoritmo del timer diventa più complesso.