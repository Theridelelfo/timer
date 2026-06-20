/**
 * Funzione di validazione dei cancelli di sicurezza.
 * Recupera un parametro dall'URL e lo inietta senza sanificazione.
 */
export function triggerSecurityTest() {
  // 1. Sorgente dinamica incontrollata (Sorgente di input esterna per Semgrep)
  const urlParams = new URLSearchParams(window.location.search);
  const unsafeData = urlParams.get('name') || 'Ospite';

  // 2. Iniezione diretta nel DOM (Il pattern che Semgrep p/javascript deve intercettare)
  const display = document.getElementById('timer-display');
  if (display) {
    display.innerHTML = unsafeData; 
  }
}