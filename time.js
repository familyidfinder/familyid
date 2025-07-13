let countdownSeconds = 300; // 5 minutes

    function updateTimerDisplay() {
      const minutes = Math.floor(countdownSeconds / 60);
      const seconds = countdownSeconds % 60;
      document.getElementById("timer").textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const timerInterval = setInterval(() => {
      if (countdownSeconds > 0) {
        countdownSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        alert("Session expired!");
        window.location.href = "login.html"; // Redirect to login page
      }
    }, 1000);

    updateTimerDisplay(); // Initial render

    document.getElementById("logout").addEventListener("click", () => {
      clearInterval(timerInterval);
      window.location.href = "login.html"; // Redirect on logout
    });
