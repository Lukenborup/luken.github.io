document.addEventListener("DOMContentLoaded", function() {
    var messages = ["Welcome to My Site", "Discover More", "Stay Awhile and Listen"]; // Array of messages to display
    var currentIndex = 0; // Start with the first message
    var header = document.getElementById("dynamicHeader"); // Get the header element

    setInterval(function() {
        header.style.opacity = 0; // Fade out
        setTimeout(function() {
            header.innerText = messages[currentIndex]; // Update the text when fully faded out
            currentIndex = (currentIndex + 1) % messages.length;
            header.style.opacity = 1; // Fade in
        }, 500); // Wait for half the interval (assuming the transition duration is 0.5s)
    }, 2000);
});
