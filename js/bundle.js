window.addEventListener('scroll', function() {
      var backToTopButton = document.getElementById('back-to-top-btn');
      if (window.pageYOffset > 100) { // Adjust this value as needed
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });
  
  document.getElementById('back-to-top-btn').addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  });
  
  // Set the date and time for the countdown (replace with your desired end date)
var countdownDate = new Date("2024-12-31T23:59:59").getTime();

// Update the countdown every second
var countdownTimer = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();
    
    // Calculate the time remaining
    var distance = countdownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown timer
    document.getElementById("countdown").innerHTML = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


// Function to update milestone counts
function updateMilestones() {
      // Increment counts for delegates, speakers, institutions, sponsors, countries, topics, sessions, and subscribers
      document.getElementById("delegate-count").textContent = parseInt(document.getElementById("participant-count").textContent) + 1;
      document.getElementById("speaker-count").textContent = parseInt(document.getElementById("speaker-count").textContent) + 1;
      document.getElementById("institution-count").textContent = parseInt(document.getElementById("institution-count").textContent) + 1;
      document.getElementById("sponsor-count").textContent = parseInt(document.getElementById("sponsor-count").textContent) + 1;
      document.getElementById("country-count").textContent = parseInt(document.getElementById("country-count").textContent) + 1;
      document.getElementById("topic-count").textContent = parseInt(document.getElementById("topic-count").textContent) + 1;
      document.getElementById("session-count").textContent = parseInt(document.getElementById("session-count").textContent) + 1;
      document.getElementById("subscriber-count").textContent = parseInt(document.getElementById("subscriber-count").textContent) + 1;
  }
  
  // Call the updateMilestones function whenever a delegate confirms their registration
  updateMilestones(); // This can be called whenever a registration confirmation occurs
  