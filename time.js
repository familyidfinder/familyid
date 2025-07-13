 let countdownSeconds = 300; // 5 minutes = 300 seconds
    let timerDisplay = document.getElementById("timer");

    function updateTimerDisplay() {
      let minutes = Math.floor(countdownSeconds / 60);
      let seconds = countdownSeconds % 60;
      timerDisplay.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startCountdown() {
      updateTimerDisplay();
      const interval = setInterval(() => {
        countdownSeconds--;
        updateTimerDisplay();

        if (countdownSeconds <= 0) {
          clearInterval(interval);
          alert("Session expired!");
          window.location.href = "indext.html"; // Redirect after timeout
        }
      }, 1000);
    }

    // Reset countdown on activity
    function resetCountdown() {
      countdownSeconds = 300;
      updateTimerDisplay();
    }

    // Events to reset countdown
    window.onload = startCountdown;
    document.onmousemove = resetCountdown;
    document.onkeypress = resetCountdown;
    document.ontouchstart = resetCountdown;
    document.onclick = resetCountdown;
