# 🛠 DevSecOps Learning Path — Timer Web App

## 🎯 Obiettivo
Questo progetto non nasce per costruire un semplice timer, ma per imparare a progettare e gestire un ambiente **DevSecOps completo** su un'applicazione minimale.

L'obiettivo è acquisire:
- Mentalità DevOps
- Integrazione della sicurezza (DevSecOps)
- Automazione CI/CD
- Qualità del codice e testing

---

# 🧠 Principi guida

## 1. Shift Left
La qualità e la sicurezza vengono introdotte **prima**, non alla fine.

## 2. Automazione
Tutto ciò che può essere automatizzato **deve essere automatizzato**.

## 3. Fail Fast
Gli errori devono emergere subito (build fallita > bug in produzione).

## 4. Everything as Code
Configurazioni, pipeline e regole vivono nel repository.

---

# 🧱 Roadmap degli Step

---

## ✅ STEP 0 — Repository base (COMPLETATO)

Obiettivo:
- Creare il repository GitHub

Checklist:
- [x] README.md
- [x] LICENSE
- [x] .gitignore (Node consigliato)

---

## ✅ STEP 1 — Struttura progetto

Obiettivo:
Definire un'organizzazione chiara del codice.

Struttura:

src/
- index.html
- style.css
- script.js

test/
- timer.test.js

.github/workflows/

package.json

Perché:
- Separazione responsabilità
- Facilita testing e manutenzione
- Base per CI/CD

---

## 🔧 STEP 2 — Inizializzazione ambiente Node

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
