let sessionTime = 1800; // 30 minutes in seconds
  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");

  const updateTimer = () => {
    const minutes = Math.floor(sessionTime / 60);
    const seconds = sessionTime % 60;

    minutesSpan.textContent = minutes.toString().padStart(2, '0');
    secondsSpan.textContent = seconds.toString().padStart(2, '0');

    if (sessionTime <= 0) {
      clearInterval(timer);
      alert("Session expired. Redirecting to login.");
      window.location.href = "login.html"; // Replace with your login or re-auth URL
    }

    sessionTime--;
  };

  updateTimer(); // Initialize display
  const timer = setInterval(updateTimer, 1000);
