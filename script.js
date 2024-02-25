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
//const link = document.querySelector('a');  
//link.textContent ='Mozilla Developer Network';  
//link.href ='https://developer.mozilla.org'; 

// only run on home page
const currentPage = window.location.pathname.split('/').pop();
if(currentPage === 'index.html' || currentPage === '') {
  const sect =document.querySelector('section'); // Selects the first <section> element found in the document and stores it in the 'sect' variable
  const para =document.createElement('p'); // Creates a new paragraph (<p>) element and stores it in the 'para' variable
  para.textContent ='Sharks can ruin a vacation!';  // Sets the text content of the newly created paragraph to 'Sharks can ruin a vacation!'
  sect.appendChild(para);  // Appends the newly created paragraph as a child to the selected section element
  //Creates a new text node containing the text ' — the premier source for web development knowledge.'
  //const text =document.createTextNode(' — the premier source for web development knowledge.');  

  //const linkPara=document.querySelector('p'); // Selects the first <p> element found in the document and stores it in 'linkPara'
  //linkPara.appendChild(text); // Appends the newly created text node as a child to the selected paragraph element.
  //sect.appendChild(linkPara); // Appends the paragraph (that now includes the text node) as a child to the selected section.
  //sect.removeChild(linkPara); // Removes the paragraph (and its child text node) from the section
  //linkPara.remove(); // Removes the paragraph from its parent node directly, without needing to specify the parent
  para.style.color ='white';  // Sets the color of the paragraph to 'white'
  para.style.backgroundColor ='blue'; // Sets the background color of the paragraph to blue
  para.style.padding ='10px'; // Sets the padding of the paragraph to 10 pixels
  para.style.width ='250px'; // Sets the width of the paragraph to 250 pixels
  para.style.textAlign ='center'; // Sets the text alignment of the paragraph to center
  
  document.getElementById('sharkDataLink').addEventListener('mouseover', function() {
      this.style.backgroundColor = '#005fa3';
  });
  
  document.getElementById('sharkDataLink').addEventListener('mouseout', function() {
      this.style.backgroundColor = '#0077cc';
  });
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

