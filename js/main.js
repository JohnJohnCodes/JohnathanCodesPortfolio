//shows the navbar on home page based on scroll//
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 175) {
      $('.navbar').removeClass('hidden');
    } else {
      $('.navbar').addClass('hidden');
    }
  });
});

//loads navbar and footer on pages//
$(function() {
  $("#navigation").load("./navbar.html");
  $("#footer").load("./footer.html");
});


//smoothScroll//
$(function() {
  // This will select everything with the class smoothScroll
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1200); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

//carousel//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-gray-800", " bg-gray-600");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " bg-gray-800";
}
