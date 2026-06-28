# 🧱 Roadmap degli Step

---

## ✅ STEP 0 — Repository base (COMPLETATO)

**Obiettivo:**
Inizializzare il repository con i file essenziali e un ambiente di sviluppo pronto, minimale e coerente con un workflow DevOps.

### 📋 Checklist Operativa

- [x] Creazione repository su GitHub
- [x] Inserimento LICENSE (MIT)
- [x] Creazione README.md (Obiettivo e Principi Guida)
- [x] Creazione roadmap.md
- [x] Configurazione .gitignore
- [x] Attivazione ambiente GitHub Codespaces

### Perché

- Garantisce una base pulita e versionata per il progetto
- Evita il versionamento di file inutili o sensibili (es. dipendenze, cache)
- Permette di lavorare da subito in un ambiente replicabile e coerente

---

## ✅ STEP 1 — Struttura progetto

Obiettivo:
Definire l’alberatura delle cartelle del repository utilizzando file placeholder per permettere il versionamento anche in assenza di codice.

Struttura da creare:
```
├── .github/
│   └── workflows/
│       └── todo.md
├── src/
│   └── todo.md
├── test/
│   └── todo.md
└── docs/
    └── archive/
        └── todo.md

```

### 📋 Checklist Operativa

- [ ] Creare la cartella `src/`
- [ ] Creare la cartella `test/`
- [ ] Creare la cartella `.github/workflows/`
- [ ] Creare la cartella `docs/archive/`
- [ ] Inserire un file `.gitkeep` in ogni cartella

### Perché

- Git traccia solo file, non cartelle: i placeholder permettono di versionare la struttura
- Favorisce una chiara separazione delle responsabilità
- Migliora organizzazione, testing e manutenzione
- Prepara la base per CI/CD e sviluppo scalabile

---

## ✅🔧 STEP 2 — Inizializzazione ambiente Node

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

## ✅🔍 STEP 3 — Qualità codice (ESLint)

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

## ✅🧪 STEP 4 — Testing (Jest)

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
