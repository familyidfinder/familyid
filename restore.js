const MAX_SESSION_TIME = 30 * 60 * 1000; // 30 minutes
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const loginTime = sessionStorage.getItem("loginTime");

  if (!isLoggedIn || isLoggedIn !== "true" || !loginTime || (Date.now() - loginTime > MAX_SESSION_TIME)) {
    sessionStorage.clear();
    alert("❌ Access Denied or Session Expired.\nPlease login at index.html");
    window.location.href = "index.html";
  }
