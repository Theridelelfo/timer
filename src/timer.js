/**
 * DevSecOps Timer - Logica di Core
 * Implementazione sicura (textContent) e gestione eventi Mobile-First
 */

// ==========================================
// 1. STATO DELL'APPLICAZIONE (Macchina a Stati)
// ==========================================
let tempoImpostato = 60; // Valore di partenza in secondi (es. 60s = 1 min)
let tempoRimanente = 60; // Il conto alla rovescia reale
let statoTimer = 'FERMO'; // Stati possibili: 'FERMO', 'IN_ESECUZIONE', 'IN_PAUSA'

let motoreTimer = null; // Riferimento al setInterval principale

// Variabili per il trucco della pressione prolungata (Long Press)
let timeoutPressione = null;
let intervalloAcceleratore = null;

// ==========================================
// 2. RECUPERO ELEMENTI DAL DOM
// ==========================================
const display = document.getElementById('timer-display');
const btnMain = document.getElementById('btn-main-action');

const btnMinMinus = document.getElementById('btn-min-minus');
const btnMinPlus = document.getElementById('btn-min-plus');
const btnSecMinus = document.getElementById('btn-sec-minus');
const btnSecPlus = document.getElementById('btn-sec-plus');

// ==========================================
// 3. FUNZIONI DI PRESENTAZIONE (UI)
// ==========================================

/**
 * Aggiorna il display in formato MM:SS in modo sicuro
 */
function aggiornaDisplay() {
  const minuti = Math.floor(tempoRimanente / 60);
  const secondi = tempoRimanente % 60;
  
  // PadStart aggiunge uno zero davanti se il numero è < 10 (es. 9 -> "09")
  const stringaMinuti = String(minuti).padStart(2, '0');
  const stringaSecondi = String(secondi).padStart(2, '0');
  
  // SICUREZZA: Usiamo textContent, mai innerHTML!
  if (display) {
    display.textContent = `${stringaMinuti}:${stringaSecondi}`;
  }
}

/**
 * Aggiorna il testo e lo stile del pulsante principale in base allo stato
 */
function aggiornaPulsantePrincipale() {
  if (statoTimer === 'FERMO') {
    btnMain.textContent = 'AVVIA';
  } else if (statoTimer === 'IN_ESECUZIONE') {
    btnMain.textContent = 'PAUSA';
  } else if (statoTimer === 'IN_PAUSA') {
    btnMain.textContent = 'RIPRENDI';
  }
}

// ==========================================
// 4. LOGICA DEL TIMER (Il Core)
// ==========================================

function attivaAllarme() {
  // Riproduce un suono se il browser lo permette, e fa lampeggiare il display
  statoTimer = 'FERMO';
  aggiornaPulsantePrincipale();
  
  display.style.color = 'red';
  setTimeout(() => { display.style.color = ''; }, 500);
  setTimeout(() => { display.style.color = 'red'; }, 1000);
  setTimeout(() => { display.style.color = ''; }, 1500);
  
  // Se disponibile, fa vibrare il telefono per mezzo secondo
  if (navigator.vibrate) {
    navigator.vibrate(500);
  }
}

function tick() {
  if (tempoRimanente > 0) {
    tempoRimanente--;
    aggiornaDisplay();
  } else {
    clearInterval(motoreTimer);
    attivaAllarme();
  }
}

function gestisciAzionePrincipale() {
  if (statoTimer === 'FERMO' || statoTimer === 'IN_PAUSA') {
    // Fai partire il timer
    statoTimer = 'IN_ESECUZIONE';
    motoreTimer = setInterval(tick, 1000);
  } else if (statoTimer === 'IN_ESECUZIONE') {
    // Metti in pausa
    statoTimer = 'IN_PAUSA';
    clearInterval(motoreTimer);
  }
  aggiornaPulsantePrincipale();
}

function resetTimer() {
  clearInterval(motoreTimer);
  statoTimer = 'FERMO';
  tempoRimanente = tempoImpostato;
  aggiornaDisplay();
  aggiornaPulsantePrincipale();
}

// ==========================================
// 5. LOGICA DI REGOLAZIONE TEMPO (Con Acceleratore)
// ==========================================

function modificaTempo(secondiDaAggiungere) {
  // Evitiamo che il tempo scenda sotto zero o superi i 60 minuti (3600 sec)
  if (statoTimer !== 'IN_ESECUZIONE') {
    let nuovoTempo = tempoImpostato + secondiDaAggiungere;
    if (nuovoTempo < 0) nuovoTempo = 0;
    if (nuovoTempo > 3600) nuovoTempo = 3600;
    
    tempoImpostato = nuovoTempo;
    tempoRimanente = nuovoTempo; // Se modifico, azzero anche il conteggio attuale
    statoTimer = 'FERMO';
    clearInterval(motoreTimer);
    
    aggiornaDisplay();
    aggiornaPulsantePrincipale();
  }
}

// ==========================================
// 6. GESTIONE EVENTI (Touch / Mouse unificati tramite Pointer)
// ==========================================

/**
 * Crea il meccanismo di pressione prolungata per i tasti +/-
 */
function assegnaEventiRegolazione(bottone, quantita) {
  if (!bottone) return;

  // Quando il dito tocca lo schermo
  bottone.addEventListener('pointerdown', (e) => {
    // Ignora il click destro del mouse
    if (e.button !== 0 && e.pointerType === 'mouse') return; 
    
    // 1. Esegui subito un singolo scatto
    modificaTempo(quantita);
    
    // 2. Prepara l'acceleratore: se il dito resta giù per 500ms, inizia a scorrere veloce
    timeoutPressione = setTimeout(() => {
      intervalloAcceleratore = setInterval(() => {
        modificaTempo(quantita);
      }, 100); // Velocità di ripetizione (ogni 100ms)
    }, 500);
  });

  // Quando il dito si stacca, o esce fuori dal bottone
  const fermaTutto = () => {
    clearTimeout(timeoutPressione);
    clearInterval(intervalloAcceleratore);
  };

  bottone.addEventListener('pointerup', fermaTutto);
  bottone.addEventListener('pointerleave', fermaTutto);
  bottone.addEventListener('pointercancel', fermaTutto);
}

// Assegnazione degli eventi ai 4 bottoni
assegnaEventiRegolazione(btnMinPlus, 60);  // +1 Minuto
assegnaEventiRegolazione(btnMinMinus, -60); // -1 Minuto
assegnaEventiRegolazione(btnSecPlus, 1);   // +1 Secondo
assegnaEventiRegolazione(btnSecMinus, -1);  // -1 Secondo

// Gestione speciale per il tasto centrale (Click vs Long Press per Reset)
if (btnMain) {
  let resetInnescato = false;

  btnMain.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    resetInnescato = false;
    
    // Se tengo premuto per 1 secondo, formatta e azzera
    timeoutPressione = setTimeout(() => {
      resetTimer();
      resetInnescato = true;
      // Feedback visivo immediato del reset
      btnMain.style.backgroundColor = '#ff4444';
      setTimeout(() => { btnMain.style.backgroundColor = ''; }, 300);
    }, 1000);
  });

  const rilasciaTastoPrincipale = () => {
    clearTimeout(timeoutPressione);
    // Se non ho innescato il reset (ho rilasciato prima di 1 secondo), avvia/pausa
    if (!resetInnescato) {
      gestisciAzionePrincipale();
    }
  };

  btnMain.addEventListener('pointerup', rilasciaTastoPrincipale);
  btnMain.addEventListener('pointerleave', () => clearTimeout(timeoutPressione));
}

// ==========================================
// 7. INIZIALIZZAZIONE AL CARICAMENTO
// ==========================================
aggiornaDisplay();
aggiornaPulsantePrincipale();