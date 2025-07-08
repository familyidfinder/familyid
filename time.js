
  // Set the session timeout duration (e.g., 10 minutes)
  const SESSION_TIMEOUT = 1 * 60 * 1000; // 10 minutes in milliseconds
  let timeout;

  // Redirect to login or another page after timeout
  function handleSessionTimeout() {
    alert("Session expired due to inactivity.");
    window.location.href = "index.html"; // Change to your login or home page
  }

  // Reset the timeout on user activity
  function resetSessionTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(handleSessionTimeout, SESSION_TIMEOUT);
  }

  // Listen for user activity
  ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetSessionTimer);
  });

  // Start the timer initially
  resetSessionTimer();
