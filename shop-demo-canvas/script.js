let search = document.getElementById("search-icon");
let close = document.getElementById("searchClose");
let input = document.getElementById("searchInput");

function searchFunction(){
    if(input.style.display === "none"){
        input.style.display = "block";
    }
    else{
        input.style.display = "none";
    }
}
function closeFunction(){
  if(input.style.display === "block"){
    input.style.display = "none";
  }
  else{
      input.style.display = "block";
  }
}


// Accordion
var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }


        let slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }        


        
        window.onscroll = function() {myFunction()};

        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        
        function myFunction() {
            if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            } else {
            header.classList.remove("sticky");
            }
        }