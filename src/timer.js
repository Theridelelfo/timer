// Test intenzionale per far scattare ESLint concluso
// Test di stress per Semgrep: questa funzione è volutamente insicura
function testSecurityGate() {
  const userInput = "<h1>Attacco XSS</h1>";
  // Semgrep p/javascript odia l'uso diretto di innerHTML con variabili
  document.getElementById('timer-display').innerHTML = userInput; 
}