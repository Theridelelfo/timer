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

### 4. Fase di Deployment (Step 7)
- [x] Modificare l'impostazione sul pannello Settings del repository GitHub per cambiare la sorgente di Pages in "GitHub Actions".
- [x] Integrare nel file `ci-cd.yml` i permessi di scrittura obbligatori (`permissions: pages: write`, `id-token: write`).
- [x] Configurare l'azione ufficiale di build e caricamento dell'artefatto focalizzata solo sulla cartella `./src` (`upload-pages-artifact@v5`).
- [x] Abilitare l'azione finale di deploy per pubblicare il sito in produzione (`deploy-pages@v5`).
- [x] Riorganizzare l'architettura scindendo i Job: validazione parallela in Matrix per la CI e rilascio atomico sequenziale per la CD (`needs: test-and-lint`).
- [x] Configurare le **Environment Protection Rules** su GitHub per impedire il deploy automatico da rami non autorizzati (es. Pull Request esterne o di test).

### 5. Manutenzione e Sicurezza (Step 8)
- [x] Configurare e calibrare **Dependabot** (`dependabot.yml`) per il monitoraggio settimanale automatico di npm e GitHub Actions.
- [x] Ottimizzare le versioni delle Actions (`@v5`/`@v6`) rimuovendo i warning di runtime 

---

## 🔧 Da Fare (I micro-step di test e automazione futuri)

### 6. Ottimizzazione e Controllo Statico (SAST)
- [ ] Monitorare i tempi di esecuzione dei runner nel cloud per ottimizzare la cache in caso di rallentamenti.
- [ ] Integrare nel Job di CI uno scanner SAST leggero (**Semgrep**) per l'audit automatizzato della Content Security Policy (CSP) e del codice JavaScript.

### 7. Manutenzione Infrastruttura
- [ ] 📌 [PIANIFICAZIONE STRATEGICA 2027] **Capodanno 2027:** Upgrade programmato dell'ambiente di runtime principale da Node 22 a Node 24 (LTS) sia nei runner di CI/CD che nell'ambiente locale, prima dell'EOL (End of Life) di Node 22 previsto per Maggio 2027 (sfruttando la Matrix Strategy già collaudata).
- [ ] 🗃 **Fase Archiviazione:** Al completamento e alla stabilizzazione anche dello Step 8 (Security Automation con Semgrep), questo file `todo.md` verrà spostato in `docs/archive/`.

---
