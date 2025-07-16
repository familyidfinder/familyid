  // Start at 30 minutes = 1800 seconds
    let totalSeconds = 30 * 60;

    function updateSessionTimer() {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      document.getElementById("sessionTimerValue").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("secondsTimer").textContent = seconds.toString().padStart(2, '0');

      if (totalSeconds > 0) {
        totalSeconds--;
      } else {
        clearInterval(timerInterval);
        alert("Session expired!");
        // Optionally redirect:
        // window.location.href = "relogin.html";
      }
    }

    const timerInterval = setInterval(updateSessionTimer, 1000);
    updateSessionTimer(); // Run immediately on load
  function logoutNow() {
    clearInterval(timer); // stop session timer
    alert("You have been logged out.");
    window.location.href = "index.html"; // change to your login page
  }
