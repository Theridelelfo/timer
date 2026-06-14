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

---

## 🔧 Da Fare (I micro-step di test e automazione futuri)

### 3. Validazione e Debug dei Cancelli di Controllo (Fase Corrente)
- [ ] Verificare il funzionamento del primo cancello (**Linting**) tramite l'esecuzione automatica di ESLint nel cloud.
- [ ] Verificare il funzionamento del secondo cancello (**Security Audit**) tramite il controllo delle dipendenze con `npm audit`.
- [ ] Verificare il funzionamento del terzo cancello (**Testing**) assicurandosi che la suite Vitest venga eseguita in modalità singola (`vitest run`).

### 4. Fase di Deployment (Futuro Step 7)
- [ ] **GitHub Pages:** Configurare il rilascio automatico del codice contenuto nella cartella `src/` sul server di produzione solo se tutti i cancelli precedenti sono verdi.

---

### 📌 BUSSOLA DI TRANSIZIONE (Promemoria di Architettura)
*Note per le fasi successive del progetto globale:*
- 🔍 **Nota di Debug:** Ricordarsi che i warning sui runner di GitHub relativi a Node 20 dipendono da configurazioni interne della piattaforma e non bloccano i nostri tre cancelli.
- 🗃 **Fase Archiviazione:** Al completamento e alla stabilizzazione della pipeline, questo file `todo.md` verrà spostato in `docs/archive/`.