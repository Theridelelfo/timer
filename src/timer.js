/**
 * Test di stress strutturale per Semgrep.
 * Utilizzo di API native considerate critiche (OWASP).
 */
export function triggerSecurityTest(maliciousInput) {
  // 1. Esecuzione dinamica del codice (Altissimo rischio, blocco immediato)
  eval(maliciousInput);

  // 2. Scrittura diretta nel documento (Altissimo rischio XSS)
  document.write(maliciousInput);
}