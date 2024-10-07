//displaying after secs
window.onload = function() {
    setTimeout(function() {
      // Hide the welcome text
      document.getElementById("welcome-text").style.display = "none";
      // Show and fade in the programmer text
      var programmerText = document.getElementById("programmer-text");
      programmerText.style.display = "block";
      programmerText.classList.add("show");  // Add the fade-in effect

      var dataAnalystText = document.getElementById("data-analyst-text");
        dataAnalystText.style.display = "block";
        dataAnalystText.classList.add("show");
    }, 3000); // Adjust the time as needed
  };
  
//hamburger

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});