  const MAX_SESSION_TIME = 30 * 60 * 1000; // 30 min
  const loginStatus = sessionStorage.getItem("isLoggedIn");
  const loginTime = sessionStorage.getItem("loginTime");
  const now = new Date().getTime();

  if (!loginStatus || loginStatus !== "true" || !loginTime || now - loginTime > MAX_SESSION_TIME)
    window.location.href = "index.html";
  }
