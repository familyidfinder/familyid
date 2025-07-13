const session-timer = 10 * 60 * 1000; // 10 minutes
  let lastActivityTime = Date.now();

  // Redirect when timed out
  function checkSession() {
    const now = Date.now();
    if (now - lastActivityTime > session-timer) {
      alert("Session expired due to inactivity.");
      window.location.href = "index.html"; // Change to your target page
    }
  }

  // Update last activity time
  function updateActivity() {
    lastActivityTime = Date.now();
  }

  // Track user activity
  ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, updateActivity);
  });

  // Check session every 10 seconds (works even in background)
  setInterval(checkSession, 10000); // 10 sec interval
