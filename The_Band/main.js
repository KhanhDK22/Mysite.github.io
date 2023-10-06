var mySlide = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    mySlide++;
    if (mySlide > x.length) { mySlide = 1 }
    x[mySlide - 1].style.display = "block";
    setTimeout(carousel, 1500);
}