    let countdownTime = 1 * 30; // 5 minutes in seconds
    let timer;

    function updateCountdown() {
      const minutes = String(Math.floor(countdownTime / 60)).padStart(2, '0');
      const seconds = String(countdownTime % 60).padStart(2, '0');
      document.getElementById('countdown').textContent = `Session Time Remaining: ${minutes}:${seconds}`;

      if (countdownTime > 0) {
        countdownTime--;
      } else {
        clearInterval(timer);
        alert("Session expired! Redirecting to login...");
        window.location.href = "login.html"; // Redirect or logout
      }
    }

    // Start countdown
    timer = setInterval(updateCountdown, 1000);

    // Optional: Reset timer on activity
    function resetTimer() {
      countdownTime = 1 * 30; // Reset to 5 mins
    }

    ['mousemove', 'keydown', 'click'].forEach(event =>
      document.addEventListener(event, resetTimer)
    );
