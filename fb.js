const firebaseConfig = {
  apiKey: "AIzaSyAIInOuFA0oMsv1dOn4h5-ZPg5fT8xs0k8",
  authDomain: "d-45-177f3.firebaseapp.com",
  projectId: "d-45-177f3",
  storageBucket: "d-45-177f3.appspot.com",
  messagingSenderId: "142681750542",
  appId: "1:142681750542:web:89340b9c374a2488b6505f"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Redirect to login page if user is not logged in
auth.onAuthStateChanged((user) => {
  if (!user && window.location.pathname !== "/familyid/index.html") {
    window.location.href = "index.html";
  }
});
