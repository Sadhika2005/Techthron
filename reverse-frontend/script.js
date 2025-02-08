// Login Handling
document.addEventListener("DOMContentLoaded", function() {
    let loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            
            if (username && password) {
                alert("Login successful!");
                localStorage.setItem("loggedIn", "true"); // Store login state
                localStorage.setItem("username", username); // Store username
                window.location.href = "index.html"; // Redirect to the main page
            } else {
                alert("Please enter a username and password.");
            }
        });
    }
    
    // Redirect to login page if not logged in
    if (window.location.pathname.includes("index.html") && localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }

    // Display logged-in user
    let userDisplay = document.getElementById("userDisplay");
    if (userDisplay && localStorage.getItem("username")) {
        userDisplay.innerText = `Welcome, ${localStorage.getItem("username")}!`;
    }
});

// Image Generation Function
function generateImage() {
    let description = document.getElementById("description").value;
    
    if (!description) {
        alert("Please enter a description.");
        return;
    }

    // Simulating image generation (Replace with real API call)
    let imageUrl = "https://via.placeholder.com/300?text=" + encodeURIComponent(description);
    
    let imageElement = document.getElementById("generatedImage");
    imageElement.src = imageUrl;
    imageElement.style.display = "block";
}

// Logout Function
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
}
