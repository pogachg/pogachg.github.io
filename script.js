var isOriginalText = true; // set default to original text

document.getElementById('changeText').addEventListener('click', function() {
  var paragraphs = document.querySelectorAll('p');
  var messageContainer = document.getElementById('messageContainer');
  var button = document.getElementById('changeText');

  if (isOriginalText) {
    // Hide paragraphs
    paragraphs.forEach(function(p) {
      p.style.display = 'none';
    });

    // Show the message and change the button text
    messageContainer.style.display = 'block';
    messageContainer.textContent = "Thank you for clicking. Lots more to come as I learn Web Development!";
    button.textContent = "Click to Restore";
  } else {
    // Show paragraphs
    paragraphs.forEach(function(p) {
      p.style.display = 'block';
    });

    // Hide the message and reset the button text
    messageContainer.style.display = 'none';
    button.textContent = "Click Me!";
  }

  // Toggle the state
  isOriginalText = !isOriginalText;
});
