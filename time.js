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
        document.getElementById("logoutMessage").style.display = "block";
        deletecookie();
        setTimeout(() => {
          formPost('logoutNew.do'); // Replace with actual logout endpoint
        }, 2000); // Delay for user to see message
      }
    }
    function deletecookie() {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name.trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
      console.log("Cookies cleared.");
    }

    function formPost(actionUrl) {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = actionUrl;
      document.body.appendChild(form);
      form.submit();
    }
    const timerInterval = setInterval(updateSessionTimer, 1000);
    updateSessionTimer(); // Start immediately
  function logoutNow() {
    clearInterval(timer); // stop session timer
    alert("You have been logged out.");
    window.location.href = "index.html"; // change to your login page
  }
