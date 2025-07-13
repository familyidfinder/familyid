let countdownSeconds = 300; // 5 minutes = 300 seconds
    const timerDisplay = document.getElementById("timer");

    function updateTimer() {
      const minutes = Math.floor(countdownSeconds / 60);
      const seconds = countdownSeconds % 60;
      timerDisplay.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (countdownSeconds > 0) {
        countdownSeconds--;
      } else {
        clearInterval(timerInterval);
        alert("Session expired! Redirecting to login page.");
        // window.location.href = "login.html"; // optional redirect
      }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // initial call to avoid 1-second delay
