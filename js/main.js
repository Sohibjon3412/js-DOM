let slideAnimation = 1;

function slidesDisplay(a) {
  let i;
  let elSlider = document.getElementsByClassName("slider-img");
  if (a > elSlider.length) { 
    slideAnimation = 1;
  } else if (a < 1) { 
    slideAnimation = elSlider.length;
  }

  for (i = 0; i < elSlider.length; i++) {
    elSlider[i].style.display  = "none";
  }
  elSlider[slideAnimation - 1].style.display  = "block";
}
function sliderImg(a) {
  slidesDisplay(slideAnimation += a);
}
