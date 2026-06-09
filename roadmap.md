# 🧱 Roadmap degli Step

## ✅ STEP 0 — Repository base (COMPLETATO)

Obiettivo:
Inizializzare il repository remoto con i file di configurazione essenziali e l'ambiente di sviluppo pronto.

Checklist:
- [x] Creazione repository su GitHub
- [x] Creazione roadmap.md
- [x] README.md (contenente Obiettivo e Principi Guida)
- [x] LICENSE (MIT)
- [x] .gitignore contenente anche 'node_modules/'  (specifico per Node.js)
- [x] Attivazione dell'ambiente GitHub Codespaces

Perché:
- Il .gitignore protegge il repository dal caricamento accidentale di file di log o dipendenze pesanti (`node_modules`).

---

## 🔧 STEP 1 — Struttura progetto

Obiettivo:
Definire l'alberatura delle cartelle sul repository sfruttando file segnaposto.

Struttura da creare:
```
├── .github/
│   └── workflows/
│       └── todo.md
├── src/
│   └── todo.md
└── test/
    └── todo.md
```

Checklist:
- [x] Creare la cartella `src/` con all'interno un file `todo.md`
- [x] Creare la cartella `test/` con all'interno un file `todo.md`
- [x] Creare la cartella `.github/workflows/` con all'interno un file `todo.md`

Perché:
- Git traccia solo i file, non le cartelle. I file `todo.md` permettono di fare il push dell'architettura prima di scrivere il codice applicativo.
- Separazione responsabilità
- Facilita testing e manutenzione
- Base per CI/CD

---

## 🔧 STEP 2 — Inizializzazione ambiente Node

### 📌 Bussola di Transizione (Stato di Avanzamento dell'Alberatura)

Tracciamento dei file da collocare e dei relativi passaggi:

[ ] package.json ➔ Da creare in questa fase (Step 2) tramite inizializzazione npm.
[ ] Configurazione Linter ➔ Da creare nella fase Qualità Codice (Step 3).
[ ] test/timer.test.js ➔ Da creare nella fase di Testing (Step 4).

Azione di Archiviazione: Il file test/todo.md originale verrà spostato in una nuova cartella d'archivio (docs/archive/test_todo_step1.md) invece di essere sovrascritto o eliminato.

[ ] File Applicativi (index.html, style.css, script.js) ➔ Da creare nella fase applicativa reale (Step 9).

Azione di Archiviazione: Il file src/todo.md originale verrà spostato in docs/archive/src_todo_step1.md.

Struttura:

src/
- index.html
- style.css
- script.js

test/
- timer.test.js

.github/workflows/

package.json

---
Obiettivo dello Step 2:
Configurare l'ambiente runtime locale (Node.js) e preparare il manifesto delle dipendenze del progetto.

Checklist dello Step 2:

[ ] Creare la cartella di memoria storica docs/archive/ per conservare i nostri progressi.

[ ] Eseguire l'inizializzazione del gestore di pacchetti (npm init).

[ ] Configurare gli script di avvio base nel file package.json generato.


Obiettivo:
Aggiungere toolchain per test, lint e automazione.

Azioni:
- inizializzare npm
- creare package.json
- definire script base

Perché:
- standard nei progetti moderni
- abilita automazione

---

## 🔍 STEP 3 — Qualità codice (ESLint)

Obiettivo:
Evitare errori e mantenere codice pulito.

Azioni:
- installare ESLint
- configurarlo
- aggiungere script lint

Perché:
- intercetta bug prima dei test
- standardizza stile

---

## 🧪 STEP 4 — Testing (Jest)

Obiettivo:
Testare la logica del timer.

Azioni:
- installare Jest
- scrivere primi test
- collegare test a CI

Perché:
- garantisce correttezza logica
- previene regressioni

---

## 🔐 STEP 5 — Security by Design

Obiettivo:
Integrare sicurezza fin dall'inizio.

Azioni:
- usare textContent (no innerHTML)
- definire Content Security Policy
- evitare dipendenze inutili

Perché:
- riduce superficie di attacco
- previene XSS

---

## ⚙️ STEP 6 — CI (Continuous Integration)

Obiettivo:
Automatizzare controlli su ogni commit.

Pipeline:
- install dependencies
- lint
- test
- security audit

Strumento:
GitHub Actions

Perché:
- garantisce qualità continua
- evita errori in produzione

---

## 🚀 STEP 7 — CD (Continuous Deployment)

Obiettivo:
Deploy automatico su GitHub Pages.

Trigger:
push su main

Perché:
- elimina deploy manuali
- pipeline completa

---

## 🔎 STEP 8 — Security Automation

Obiettivo:
Monitorare vulnerabilità automaticamente.

Azioni:
- abilitare Dependabot
- attivare npm audit in pipeline
- (opzionale) CodeQL

Perché:
- sicurezza continua
- aggiornamenti automatici

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
