# 🧱 Roadmap degli Step

## ✅ STEP 0 — Repository base (COMPLETATO)

Obiettivo:
Inizializzare il repository remoto con i file di configurazione essenziali e l'ambiente di sviluppo pronto.

### 📋 Checklist Operativa

- [x] Creazione repository su GitHub
- [x] Creazione roadmap.md
- [x] README.md (contenente Obiettivo e Principi Guida)
- [x] LICENSE (MIT)
- [x] .gitignore contenente anche 'node_modules/'  (specifico per Node.js)
- [x] Attivazione dell'ambiente GitHub Codespaces

Perché:
- Il .gitignore protegge il repository dal caricamento accidentale di file di log o dipendenze pesanti (`node_modules`).

---

## ✅🔧 STEP 1 — Struttura progetto

Obiettivo:
Definire l'alberatura delle cartelle sul repository sfruttando file segnaposto.

Struttura da creare:
```
├── .github/
│   └── workflows/
│       └── todo.md
├── src/
│   └── todo.md
├── test/
│    └── todo.md
└── doc/archive/

```

### 📋 Checklist Operativa

- [x] Creare la cartella `src/` con all'interno un file `todo.md`
- [x] Creare la cartella `test/` con all'interno un file `todo.md`
- [x] Creare la cartella `.github/workflows/` con all'interno un file `todo.md`
- [x] Creare la cartella di memoria storica `docs/archive/` con all'interno un file `todo.md`.

Perché:
- Git traccia solo i file, non le cartelle. I file `todo.md` permettono di fare il push dell'architettura prima di scrivere il codice applicativo.
- Separazione responsabilità
- Facilita testing e manutenzione
- Base per CI/CD

---

## ✅🔧 STEP 2 — Inizializzazione ambiente Node

Obiettivo dello Step 2:
Configurare l'ambiente runtime locale (Node.js) e preparare il manifesto delle dipendenze del progetto.
Aggiungere toolchain per test, lint e automazione.

### 📋 Checklist Operativa

- [x] Eseguire l'inizializzazione del gestore di pacchetti e contestuale creazione di `package.json`(`npm init`).
- [x] Configurare gli script di automazione base (es. stub per il comando `test`) nel file `package.json` generato.

Perché:
- **Standard di settore:** `package.json` è il "passaporto" e la fondazione di qualsiasi progetto JavaScript/TypeScript moderno.
- **Abilitatore di automazione:** Senza questo file non potremo installare i motori di controllo (Linter dello Step 3) e di esecuzione (Tester dello Step 4), né istruire la pipeline di CI/CD.

---

## ✅🔍 STEP 3 — Qualità Codice (ESLint)

**Obiettivo dello Step 3:**
Configurare un linter statico compatibile con gli ES Modules per intercettare bug sintattici, prevenire vulnerabilità di sicurezza elementari e standardizzare lo stile di scrittura prima dell'esecuzione del codice.

### 📋 Checklist Operativa

- [x] **Configurazione Linter:** Installare ESLint come dipendenza di sviluppo (*DevDependency*).
- [x] Inizializzare il file di configurazione generando il file target `eslint.config.js`.
- [x] Integrare lo script `"lint": "eslint ."` all'interno del file `package.json`.
- [x] Testare il comando nel terminale per verificare che la scansione statica rilevi correttamente la struttura del progetto.

Perché:
- **Shift Left sulla Qualità:** Il linter analizza il codice *mentre scrivi*, intercettando variabili orfane o potenziali bug logici ancor prima che i test unitari vengano avviati. Questo riduce il debito tecnico e la superficie di attacco del software.

---

## ✅🧪 STEP 4 — Configurazione Testing (Vitest)

**Obiettivo dello Step 4:**
Configurare l'ambiente di Test-Driven Development (TDD) installando Vitest, garantendo l'esecuzione di test unitari veloci e nativi in ambiente ES Modules.

### 📋 Checklist Operativa
- [x] Installare Vitest come dipendenza di sviluppo (*DevDependency*).
- [x] Integrare lo script di test definitivo all'interno del `package.json` (anche se lo abbiamo già pre-configurato, verifichiamo la coerenza).
- [x] Creare un file di test minimale di prova (es. `test/timer.test.js`) per verificare che la toolchain risponda positivamente.
- [x] Eseguire il comando nel terminale per assicurarci che i test girino correttamente.

Perché:
- **Automazione e Regressione:** I test unitari automatici ci assicurano che se in futuro modificheremo il codice del timer per aggiungere una funzionalità, non romperemo la logica preesistente. Nella pipeline CI/CD, questo controllo impedirà il rilascio di codice con bug logici.

---

## ✅🔐 STEP 5 — Security by Design

Obiettivo:
Integrare la sicurezza all'interno dello skeleton dell'applicazione prima di scrivere la logica di business.

### 📋 Checklist Operativa

- [x] Creare il file di specifica `src/security-rules.json` per bandire `innerHTML`.
- [x] Creare lo scheletro di `index.html` e `timer.html` con Content Security Policy (CSP) restrittiva.
- [x] Creare i file segnaposto vuoti `style.css` e `timer.js` come ES Modules.
- [x] Evitare dipendenze inutili
- [x] Validare la CSP nel browser tramite i DevTools di Codespaces simulando un attacco XSS inline.

Perchè:

- riduce superficie di attacco
- previene XSS

---

## ✅⚙️ STEP 6 — CI (Continuous Integration)

Obiettivo:
Automatizzare i controlli di qualità e sicurezza su ogni commit prima di toccare la logica applicativa.

### 📋 Checklist Operativa

- [x] Creare il file di configurazione del workflow `.github/workflows/ci-cd.yml`.
- [x] Configurare l'ambiente di esecuzione (Runner Ubuntu, Checkout del codice, installazione di Node.js 22 e `npm ci`).
- [x] Configurare e testare la fase di Linting (`npm run lint`).
- [x] Configurare e testare la fase di Security Audit (`npm audit`).
- [x] Configurare e testare la fase di Testing (`npm run test:run`).
- [x] Implementare il **Path Filtering** per escludere i file di documentazione (`**.md`, `docs/**`) dal triggering della pipeline.

Pipeline:
- install dependencies
- lint
- security audit
- test

Strumento:
GitHub Actions

Perché:
- **Qualità Continua:** Intercetta i bug strutturali e le regressioni logiche prima che raggiungano il server di produzione.
- **Fail-Fast:** Isola gli errori nei primi stadi dell'esecuzione (es. lint/audit) risparmiando tempo di computazione sul cloud.

## ✅🚀 STEP 7 — CD (Continuous Deployment)

Obiettivo:
Rilascio e pubblicazione automatica dell'applicazione web sul server di produzione solo al superamento dei cancelli di controllo.

### 📋 Checklist Operativa
- [x] Abilitare l'utilizzo di "GitHub Actions" come sorgente di build nel pannello Settings del repository.
- [x] Configurare i permessi crittografici globali di scrittura (`permissions`) nel workflow YAML.
- [x] Integrare la fase di isolamento e caricamento dell'artefatto focalizzata sulla sola cartella `./src`.
- [x] Implementare lo step finale di deploy per rendere l'applicazione accessibile pubblicamente online.
- [x] Configurazione del Deployment automatico (estrazione, isolamento e archiviazione tramite comando `tar` della cartella `src/` nella root del server web).
- [x] Mantenere l'ambiente dei runner forzato su Node 24 (`FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true`) per scudare la pipeline dall'obsolescenza strutturale delle azioni di terze parti e di GitHub stesso.

Strumenti Utilizzati:
- GitHub Actions Environment (Azioni ufficiali: `configure-pages@v5`, `upload-pages-artifact@v4`, `deploy-pages@v4`).

Trigger e Vincoli di Esecuzione:
- **Innesco:** Comandi di `push` (o merge approvati) verso il ramo `main`.
- **Condizione di Sicurezza:** Il deployment si attiva esclusivamente se i tre cancelli precedenti (Linting ➔ Security Audit ➔ Testing) restituiscono esito verde.

Perché:
- **Zero Overhead:** Elimina completamente i rilasci manuali e i rischi di disallineamento tra locale e produzione.
- **Infrastruttura Conclusa:** Chiude il ciclo DevOps fondamentale, creando una pipeline integrata e sicura al 100%.

---

## 🔎 STEP 8 — Security Automation

Obiettivo: innalzare il livello di protezione del repository integrando controlli di sicurezza statici sul codice e monitoraggio automatico delle dipendenze.

### 📋 Checklist Operativa
- [ ] Configurare e attivare **Dependabot** tramite il file `.github/dependabot.yml` per monitorare e aggiornare automaticamente le dipendenze obsolete.
- [ ] Integrare in pipeline uno scanner SAST leggero (**Semgrep**) focalizzato sull'audit della Content Security Policy (CSP) e del codice JavaScript.
- [ ] Ottimizzare e blindare le versioni delle GitHub Actions nel workflow per eliminare i warning di deprecazione legati a Node.js.


### 📌 Bussola di Transizione 
*Tracciamento dei file target e dei relativi passaggi futuri:*

- [ ] **File Applicativi nella directory `/src`:** Creazione e sviluppo dei file target (`index.html`, `style.css`, `timer.js`) ➔ *Da avviare nella fase applicativa reale (Step 9).*
- 📂 **Fase Applicativa (Step 9):** Scrittura dell'interfaccia utente, della logica di calcolo e degli Event Listeners in `src/timer.js`.

Azioni:
- abilitare Dependabot
- attivare npm audit in pipeline
- (opzionale) CodeQL

Perché:
- sicurezza continua
- aggiornamenti automatici
### 📌 Bussola di Transizione 
*Tracciamento dei file target e dei relativi passaggi futuri:*

- [ ] **File Applicativi nella directory `/src`:** Creazione e sviluppo dei file target (`index.html`, `style.css`, `timer.js`) ➔ *Da avviare nella fase applicativa reale (Step 9).*
- 📂 **Fase Applicativa (Step 9):** Scrittura dell'interfaccia utente, della logica di calcolo e degli Event Listeners in `src/timer.js`.
- 🗃 **Nota di Archiviazione:** Al completamento e alla stabilizzazione dello Step 9, i file `src/todo.md`, `test/todo.md` e `.github/workflows/todo.md` verranno spostati in `docs/archive/`.
---

## 📱 STEP 9 — Implementazione Timer

Obiettivo:
Scrivere l'applicazione reale rispettando le regole definite.

Nota:
Il codice deve:
- essere testabile
- essere semplice
- rispettare sicurezza

---

## 🔁 STEP 10 — Miglioramenti iterativi

Obiettivo:
Applicare miglioramenti continui.

Esempi:
- UI/UX migliori
- performance
- nuove funzionalità
- trasferire i todo.md in una directory d'archivio
---

# 📊 Obiettivo finale

Alla fine del percorso avrai:

✅ Pipeline completa CI/CD  
✅ Testing automatizzato  
✅ Sicurezza integrata  
✅ Deploy automatico  
✅ Architettura pulita  

---

# 🧠 Risultato reale

Non avrai solo costruito un timer.

Avrai imparato:
- come lavora un team moderno
- come si struttura un progetto professionale
- come integrare sicurezza e sviluppo

---

# 🚀 Metodo di lavoro

Procederemo così:

1. Analisi step
2. Implementazione guidata
3. Feedback e dubbi
4. Iterazione

---

👉 Ogni step deve essere **compreso**, non solo eseguito.
