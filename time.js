(() => {
  const warningDelay = 14 * 60 * 1000; // e.g., 14 min
  const countdownSeconds = 60;
  let countdownTimer, seconds;

  function showWarning() {
    seconds = countdownSeconds;
    document.getElementById('countdown').textContent = seconds;
    document.getElementById('session-warning').style.display = 'block';
    countdownTimer = setInterval(() => {
      seconds--;
      document.getElementById('countdown').textContent = seconds;
      if (seconds <= 0) {
        clearInterval(countdownTimer);
        alert('Session expired – please log in again');
        // Optional: redirect to login page
        // window.location.href = '/login';
      }
    }, 1000);
  }

  function resetWarning() {
    clearInterval(countdownTimer);
    document.getElementById('session-warning').style.display = 'none';
    // Ping server or re-authenticate to extend session
    fetch('/keep-session-alive');
  }

  document.getElementById('extend').addEventListener('click', resetWarning);

  // Start warning timer after initial load
  setTimeout(showWarning, warningDelay);

  // Optional: reset warning if user activity is detected
  ['click', 'keydown', 'mousemove', 'scroll'].forEach(evt =>
    document.addEventListener(evt, () => {
      clearTimeout(showWarning);
      resetWarning();
      setTimeout(showWarning, warningDelay);
    })
  );
})();
