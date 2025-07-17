$(document).ready(function() {
  // Function to initialize the flipbook
  function initializeFlipbook() {
    const coverImageSrc = document.getElementById("cover-image").src;
    const page1ImageSrc = document.getElementById("page-1-image").src;
    const page2ImageSrc = document.getElementById("page-2-image").src;
    const page3ImageSrc = document.getElementById("page-3-image").src;
    const page4ImageSrc = document.getElementById("page-4-image").src;
    const thankyouImageSrc = document.getElementById("thankyou-image").src;

    console.log('coverImageSrc', coverImageSrc);
    console.log('page1ImageSrc', page1ImageSrc);

    document.querySelector("#flipbook-cover img").src = coverImageSrc;
    document.querySelector("#flipbook-page-1 img").src = page1ImageSrc;
    document.querySelector("#flipbook-page-2 img").src = page2ImageSrc;
    document.querySelector("#flipbook-page-3 img").src = page3ImageSrc;
    document.querySelector("#flipbook-page-4 img").src = page4ImageSrc;
    document.querySelector("#flipbook-thankyou img").src = thankyouImageSrc;

    $(".flipbook").turn();
  }

  // Initialize flipbook after the DOM is fully loaded
  initializeFlipbook();
});