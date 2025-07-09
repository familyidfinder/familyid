let sessionTime = 1800; // 30 minutes
  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");
  const sessionTimerDiv = document.getElementById("session-timer");
  const sessionExpiredDiv = document.getElementById("session-expired");

  const updateTimer = () => {
    const minutes = Math.floor(sessionTime / 60);
    const seconds = sessionTime % 60;

    minutesSpan.textContent = minutes.toString().padStart(2, '0');
    secondsSpan.textContent = seconds.toString().padStart(2, '0');

    if (sessionTime <= 0) {
      clearInterval(timer);

      // Hide timer, show red expired banner
      sessionTimerDiv.style.display = 'none';
      sessionExpiredDiv.style.display = 'block';

      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = "login.html"; // Change to your login page
      }, 3000); // 3 seconds
    }

    sessionTime--;
  };

  updateTimer(); // Initialize display
  const timer = setInterval(updateTimer, 1000);
