firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const creationTime = new Date(user.metadata.creationTime);
    const now = new Date();
    const minutesOld = (now - creationTime) / 60000;

    if (minutesOld > 30) {
      alert("❌ Login not allowed: Account is older than 30 minutes.");
      firebase.auth().signOut(); // logout immediately
    } else {
      console.log("✅ Login allowed");
    }
  }
});
