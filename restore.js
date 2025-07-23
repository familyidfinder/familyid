  const MAX_SESSION_TIME = 30 * 60 * 1000; // 30 min
  const loginStatus = sessionStorage.getItem("isLoggedIn");
  const loginTime = sessionStorage.getItem("loginTime");
  const now = new Date().getTime();

  if (!loginStatus || !loginTime || now - loginTime > MAX_SESSION_TIME) {
    sessionStorage.clear();
    alert("Access denied or session expired. Please login again.");
    window.location.href = "index.html";
  }
