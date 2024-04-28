$(document).ready(function () {
  // Create an alert once the page has loaded
  alert("This page has loaded!");

  // Change background color on click
  $(document).on("click", function () {
    $("body").css("background", "red");
    $("#GFG").text("Background Color Changed!");
  });

  // Function to change styling of a single paragraph
  $(".paragraph1").css({ color: "blue", "font-weight": "bold" });

  // Fade out .image2 when clicked
  $(".image2").click(function () {
    $(".image2").fadeOut("slow", function () {
      // Animation complete
      console.log("Fade out complete");
    });
  });

  $(document).ready(function () {
    // Slide up card-body elements over 0 seconds on page load
    $(".card-body").slideUp(0);
  
    
    $(".card").click(function () {
      let index = $(this).index();
      let currCard = $(".card").eq(index);
      let currBody = $(`.card:eq(${index}) .card-body`);
  
      if (currCard.hasClass("active")) {
        currBody.slideUp();
      } else {
        $(".card-body").slideUp();
        currBody.slideDown();
      }
      $(".card").removeClass("active");
      currCard.toggleClass("active");
    });
  });

  $("#fadeInBtn").click(function () {
    // Fade in image when fade in button is clicked
    $("#imageContainer img").fadeIn(3000); // 3 seconds
  });

  $("#fadeOutBtn").click(function () {
    // Fade out image when fade out button is clicked
    $("#imageContainer img").fadeOut(3000); // 3 seconds
  });
});
 // Set up fade in and fade out buttons
 $("#fadeInBtn").click(function () {
  // Fade in image when fade in button is clicked
  $("*").fadeIn(3000); // 3 seconds
});

$("#fadeOutBtn").click(function () {
  // Fade out image when fade out button is clicked
  $("*").fadeOut(3000); // 3 seconds
});

$('.hiddenFormMouseover').mouseenter(function() {
  $(this).children('.hiddenFormMouseoverButton').stop();
  $(this).children('.hiddenFormMouseoverButton').fadeOut(0);
  $(this).children('.hiddenFormMouseoverButton').fadeIn();
});

$('.hiddenFormMouseover').mouseleave(function() {
  $(this).children('.hiddenFormMouseoverButton').stop();
  $(this).children('.hiddenFormMouseoverButton').fadeIn(0);
  $(this).children('.hiddenFormMouseoverButton').fadeOut();
});
$(document).ready(function(){
  $('.fade-out').click(function(){
      $(this).fadeOut();
  });
});



//https://www.geeksforgeeks.org/how-to-change-the-background-color-after-clicking-the-button-in-javascript/#using-jquery-to-change-the-background
//https://www.w3schools.com/jquery/jquery_css.asp
//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeout
//https://www.youtube.com/watch?v=Srj2YPHjsn4&t=65s
//https://stackoverflow.com/questions/54348241/difficulty-creating-jquery-loop-to-repeatedly-change-background-color-and-animat
//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadetoggle
//https://www.w3schools.com/howto/howto_js_accordion.asp