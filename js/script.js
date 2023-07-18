// ##################################
// Fonction sticky menu
// ##################################
document.addEventListener("DOMContentLoaded", function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener("scroll", myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById("navprincipale");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position.
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  }

  function myFunctionForResponsive() {
    navbar.classList.toggle("responsive");
  }
});
