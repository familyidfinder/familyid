const sessionDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
  const endTime = Date.now() + sessionDuration;

  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");
  const sessionTimerDiv = document.getElementById("session-timer");
  const sessionExpiredDiv = document.getElementById("session-expired");

  function updateTimer() {
    const remaining = endTime - Date.now();

    if (remaining <= 0) {
      clearInterval(timer);
      sessionTimerDiv.style.display = 'none';
      sessionExpiredDiv.style.display = 'block';
      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
      return;
    }

    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    minutesSpan.textContent = minutes.toString().padStart(2, '0');
    secondsSpan.textContent = seconds.toString().padStart(2, '0');
  }

  updateTimer();
  const timer = setInterval(updateTimer, 1000);

//clear login on close/reopen
  window.addEventListener("beforeunload", function () {
    sessionStorage.removeItem("loggedIn");
  });

//direct access block
 if (!sessionStorage.getItem("loggedIn")) {
      // If not logged in, redirect to login page
      window.location.href = "index.html";
    }

//logout button
function logoutNow() {
    sessionStorage.removeItem("isLoggedIn");
    alert("You have been logged out.");
    window.location.href = "index.html";
  }
