const SESSION_TIMEOUT_MS = 1 * 60 * 1000; // 1 minute

let timeout;

function resetSessionTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    alert("Session expired due to inactivity.");
    window.location.href = "index.html"; // Replace with your login or start page
  }, SESSION_TIMEOUT_MS);
}

// Reset on user activity
['click', 'mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
  document.addEventListener(event, resetSessionTimer);
});

resetSessionTimer(); // Start timer on page load
