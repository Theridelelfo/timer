# TODO - workflows

## ✅ Completato

### 1. Set up base
- [x] Creazione della cartella `.github/workflows/` 
- [x] un todo list

## 🔧 Da Fare (I micro-step della Pipeline per un progetto html/css/js)

- [ ] Definizione degli obiettivi di automazione (Lint, Test, Audit, Deploy).


### 2. Fase di Ricezione e Controllo Modifiche
- [ ] Configurare il trigger sui comandi `push` e `pull_request` verso il ramo `main`.
- [ ] Implementare il **Path Filtering** per ignorare i file di documentazione (`*.md`) ed evitare sprechi di risorse.

### 3. Fase di Quality Assurance (QA)
- [ ] **Linting:** Integrare l'esecuzione automatica di ESLint per bloccare codice formattato male o con potenziali bug sintattici.

### 4. Fase di Security (Il pilastro Sec)
- [ ] **Dependency Audit:** Configurare un controllo di sicurezza automatico (es. `npm audit`) per intercettare librerie esterne vulnerabili prima del build.

### 5 Fase di test
- [ ] **Testing:** Integrare l'esecuzione automatica della suite di test Vitest. La pipeline deve fallire se anche un solo test fallisce.

### 6. Fase di Deployment (CD)
- [ ] **GitHub Pages:** Configurare il rilascio automatico dell'applicazione web sul server statico di GitHub solo se tutte le fasi precedenti (Lint, Test, Audit) sono state superate con successo.
