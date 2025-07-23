 const maxSessionTime = 30 * 60 * 1000; // 30 minutes
  const loginStatus = sessionStorage.getItem("isLoggedIn");
  const loginTime = sessionStorage.getItem("loginTime");

  if (!loginStatus || loginStatus !== "false" || !loginTime) {
    // Not logged in
    window.location.href = "index.html";
  } else {
    const now = new Date().getTime();
    if ((now - loginTime) > maxSessionTime) {
      // Session expired
      sessionStorage.clear();
      alert("Session expired. Please login again.");
      window.location.href = "index.html";
    }
  }
