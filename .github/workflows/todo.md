# TODO - workflows

Questa cartella contiene i file di configurazione per l'automazione dei controlli (CI/CD) tramite GitHub Actions.

## ✅ Completato

### 1. Set up base
- [x] Creazione della cartella `.github/workflows/`
- [x] Creazione di questo file `todo.md` di tracciamento

### 2. Struttura e Innesco della Pipeline (Step 6)
- [x] Definire gli obiettivi di automazione nel workflow (Lint ➔ Audit ➔ Test).
- [x] Configurare i trigger per i comandi `push` e `pull_request` verso il ramo `main`.
- [x] Implementare il **Path Filtering** (`paths-ignore`) per evitare l'avvio della pipeline quando si modificano solo file di documentazione (`.md`).
- [x] Configurare l'ambiente di esecuzione isolato (Runner Ubuntu, installazione di Node 22 e comando `npm ci`).

### 3. Validazione e Debug dei Cancelli di Controllo (Step 6)
- [x] Verificare il funzionamento del primo cancello (**Linting**) tramite l'esecuzione automatica di ESLint nel cloud.
- [x] Verificare il funzionamento del secondo cancello (**Security Audit**) tramite il controllo delle dipendenze con `npm audit`.
- [x] Verificare il funzionamento del terzo cancello (**Testing**) assicurandosi che la suite Vitest venga eseguita in modalità singola (`vitest run`).

### 4. Fase di Deployment (Futuro Step 7)
- [ ] Modificare l'impostazione sul pannello Settings del repository GitHub per cambiare la sorgente di Pages in "GitHub Actions".
- [ ] Integrare nel file `ci-cd.yml` i permessi di scrittura obbligatori (`permissions: pages: write`).
- [ ] Configurare l'azione ufficiale di build e caricamento dell'artefatto focalizzata solo sulla cartella `./src`.
- [ ] Abilitare l'azione finale di deploy per pubblicare il sito in produzione.

---

## 🔧 Da Fare (I micro-step di test e automazione futuri)

### 5. Manutenzione Infrastruttura
- [ ] Monitorare i tempi di esecuzione dei runner nel cloud per ottimizzare la cache in caso di rallentamenti.

---

### 📌 BUSSOLA DI TRANSIZIONE (Promemoria di Architettura)
*Note per le fasesuccessive del progetto globale:*

- 🗃 **Fase Archiviazione:** Al completamento e alla stabilizzazione della pipeline di Deployment, questo file `todo.md` verrà spostato in `docs/archive/`.