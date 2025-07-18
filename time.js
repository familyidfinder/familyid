<p id="sessionTimer">
    <label id="sessionTimerValue">30</label>
    <label style="color: black;">&nbsp;&nbsp;:&nbsp;</label>
    <label id="secondsTimer" style="color: red;">00</label>
    <label style="color: black;">&nbsp;&nbsp;</label>       
  </p>

  <button class="logout-button" onclick="logoutNow()">Logout Now</button>

  <script>
    let minutes = 30;
    let seconds = 0;

    function updateSessionTimer() {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
          alert("Session expired!");
          window.location.href = "index.html"; // Redirect on timeout
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }

      document.getElementById("sessionTimerValue").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("secondsTimer").textContent = seconds.toString().padStart(2, '0');
    }

    const timerInterval = setInterval(updateSessionTimer, 1000);

    function logoutNow() {
      clearInterval(timerInterval); // Stop the session timer
      alert("You have been logged out.");
      window.location.href = "index.html"; // Redirect to login or homepage
