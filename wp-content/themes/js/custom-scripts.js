// Function to display the blocked message
function displayBlockedMessage(message) {
    var messageDiv = document.createElement('div');
    messageDiv.className = 'blocked-message';
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    setTimeout(function () {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(-50%) translateY(0)'; // Show message
    }, 100);

    setTimeout(function () {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(-50%) translateY(100%)'; // Animate out
        setTimeout(function () {
            document.body.removeChild(messageDiv);
        }, 300); // Match transition duration
    }, 2000);
}

// Disable right-click
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    displayBlockedMessage('Right click is Disabled');
});

// Disable inspect element (F12 key)
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 123) {
        event.preventDefault();
        displayBlockedMessage('Inspect Element is Disabled');
    }
});

// Disable view source (Ctrl+U key)
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.keyCode === 85) {
        event.preventDefault();
        displayBlockedMessage('View Source is Disabled');
    }
});

// Restrict text copying (Ctrl+C key)
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.keyCode === 67) {
        event.preventDefault();
        displayBlockedMessage('Copying is Disabled');
    }
});

// Disable link display on button hover
document.querySelectorAll('.no-hover-link').forEach(function(button) {
    button.addEventListener('mouseover', function(event) {
        event.preventDefault();
    });
});
