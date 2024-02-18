function readMore() {
  var dots =document.getElementById("dots");
  var moreText=document.getElementById("more");
  varbtnText=document.getElementById("myBtn");
  if(dots.style.display ==="none") {
    dots.style.display ="inline";
    readMoreBtn.innerHTML="Read more";
    moreText.style.display ="none";
  } else {
    dots.style.display ="none";
    readMoreBtn.innerHTML ="Read less";
    moreText.style.display ="inline";
  }
}
/*
var isOriginalText = true; // set default to original text

document.getElementById('changeText').addEventListener('click', function() {
  var paragraphs = document.querySelectorAll('p');
  var button = document.getElementById('changeText');

  if (isOriginalText) {
    // Hide paragraphs
    paragraphs.forEach(function(p) {
      p.style.display = 'none';
    });

    // Show the message and change the button text
    button.textContent = "Click to Restore";
  } else {
    // Show paragraphs
    paragraphs.forEach(function(p) {
      p.style.display = 'block';
    });

    // Hide the message and reset the button text
    button.textContent = "Click Me!";
  }

  // Toggle the state
  isOriginalText = !isOriginalText;
});
*/