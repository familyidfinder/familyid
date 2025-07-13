 let sessionTime = 1800;
  let timerInterval;

  const loginScreen = document.getElementById("login-screen");
  const homeScreen = document.getElementById("home-screen");
  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");

  // Show login or home
  window.onload = () => {
    if (sessionStorage.getItem("loggedIn") === "true") {
      // If page reloaded or reopened, reset login
      sessionStorage.removeItem("loggedIn");
      showLogin();
    } else {
      showLogin();
    }
  };

  function showLogin() {
    loginScreen.style.display = "block";
    homeScreen.style.display = "none";
  }

  function showHome() {
    loginScreen.style.display = "none";
    homeScreen.style.display = "block";
    startTimer();
  }

  function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user && pass) {
      sessionStorage.setItem("loggedIn", "true");
      showHome();
    } else {
      alert("Enter username and password.");
    }
  }

  function logout() {
    clearInterval(timerInterval);
    sessionStorage.removeItem("loggedIn");
    location.reload(); // force relogin
  }

  function startTimer() {
    updateTimer();
    timerInterval = setInterval(() => {
      if (sessionTime > 0) {
        sessionTime--;
        updateTimer();
      } else {
        alert("Session expired!");
        logout();
      }
    }, 1000);
  }

  function updateTimer() {
    const minutes = Math.floor(sessionTime / 60);
    const seconds = sessionTime % 60;
    minutesSpan.textContent = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
  }
