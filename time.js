  // Initial session time in seconds (30 minutes)
  let sessionSeconds = 1 * 60;

  // Update the countdown timer display
  function updateSessionDisplay() {
    const minutes = Math.floor(sessionSeconds / 60).toString().padStart(2, '0');
    const seconds = (sessionSeconds % 60).toString().padStart(2, '0');
    const sessionLabel = document.getElementById('session-timer');
    if (sessionLabel) {
      sessionLabel.textContent = `Session: ${minutes}:${seconds}`;
    }
  }
function updateActivity() { 
  lastActivityTime = Date.now();
}
  // Countdown every second
  const countdownInterval = setInterval(() => {
    sessionSeconds--;

    if (sessionSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Session expired. Logging out.");
      window.location.href = "index.html"; // Replace with your login page
    }

    updateSessionDisplay();
  }, 1000);

  // Reset timer on user activity
  function resetTimer() {
    sessionSeconds = 30 * 60;
  }

  ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetTimer);
  });

  updateSessionDisplay(); // Initial display
