var slider = document.getElementById("slider");
var price = document.getElementById("price");
var pageviews = document.getElementById("pageviews");
var interval = document.getElementById("interval");
var checkbox = document.getElementById("toggle");
var x = 100 / 7 * slider.value;

setValues(slider.value);
setRange();

slider.addEventListener("input", setRange);

function setRange() {
    setValues(slider.value);
    var x = 100 / 6 * (slider.value - 1);
    var color = "linear-gradient(90deg, hsl(174, 77%, 80%) " + x + "%, hsl(224, 65%, 95%) " + x + "%)";
    slider.style.background = color;
};

checkbox.addEventListener("change", function() {
  if(this.checked) {
      interval.innerHTML = "/ year"
  } else {
    interval.innerHTML = "/ month"
  }
});

function setValues(value) {
  switch (value) {
    case "1":
      price.innerHTML = "$2.00";
      pageviews.innerHTML = "10K";
      break;
    case "2":
      price.innerHTML = "$4.00";
      pageviews.innerHTML = "25K";
      break;
    case "3":
      price.innerHTML = "$8.00";
      pageviews.innerHTML = "50K";
      break;
    case "4":
      price.innerHTML = "$16.00";
      pageviews.innerHTML = "100K";
      break;
    case "5":
      price.innerHTML = "$32.00";
      pageviews.innerHTML = "500K";
      break;
    case "6":
      price.innerHTML = "$50.00";
      pageviews.innerHTML = "1M";
      break;
    case "7":
      price.innerHTML = "$100.00";
      pageviews.innerHTML = "5M";
      break;
  }
}
