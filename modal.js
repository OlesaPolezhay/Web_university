// Get the modal and buttons
var loginModal = document.getElementById("loginModal");
var loginBtn = document.getElementById("loginBtn");
var closeLogIN = document.getElementById("closeLogIn");

// Show the modal when the login button is clicked
loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

// Hide the modal when the close button or outside the modal is clicked
closeLogIN.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}





