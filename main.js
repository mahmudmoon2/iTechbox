var main = function () {
    $('.push-bar').on('click', function(event){
      if (!isClicked){
        event.preventDefault();
        $('.arrow').trigger('click');
        isClicked = true;
      }
    });
  
    $('.arrow').css({
      'animation': 'bounce 2s infinite'
    });
    $('.arrow').on("mouseenter", function(){
        $('.arrow').css({
                'animation': '',
                'transform': 'rotate(180deg)',
                'background-color': 'black'
           });
    });
     $('.arrow').on("mouseleave", function(){
        if (!isClicked){
            $('.arrow').css({
                    'transform': 'rotate(0deg)',
                    'background-color': 'black'
               });
        }
    });

    var isClicked = false;

    $('.arrow').on("click", function(){
        if (!isClicked){
            isClicked = true;
            $('.arrow').css({
                'transform': 'rotate(180deg)',
                'background-color': 'black',
           });

            $('.bar-cont').animate({
                top: "-15px"
            }, 300);
            $('.main-cont').animate({
                top: "0px"
            }, 300);
            // $('.news-block').css({'border': '0'});
            // $('.underlay').slideDown(1000);

        }
        else if (isClicked){
            isClicked = false;
            $('.arrow').css({
                'transform': 'rotate(0deg)',       'background-color': 'black'
           });

            $('.bar-cont').animate({
                top: "-215px"
            }, 300);
            $('.main-cont').animate({
                top: "-215px"
            }, 300);
        }
    console.log('isClicked= '+isClicked);
    });
  
    $('.card').on('mouseenter', function() {
      $(this).find('.card-text').slideDown(300);
    });
  
    $('.card').on('mouseleave', function(event) {
       $(this).find('.card-text').css({
         'display': 'none'
       });
     });
};

$(document).ready(main);


/* DESKTOP */
// For Filters
document.addEventListener("DOMContentLoaded", function() {
  var filterBtn = document.getElementById('filter-btn');
  var btnTxt = document.getElementById('btn-txt');
  var filterAngle = document.getElementById('filter-angle');
  
  $('#filterbar').collapse(false);
  var count = 0, count2 = 0;
  function changeBtnTxt() {
  $('#filterbar').collapse(true);
  count++;
  if (count % 2 != 0) {
  filterAngle.classList.add("fa-angle-right");
  btnTxt.innerText = "show filters"
  filterBtn.style.backgroundColor = "#36a31b";
  }
  else {
  filterAngle.classList.remove("fa-angle-right")
  btnTxt.innerText = "hide filters"
  filterBtn.style.backgroundColor = "#ff935d";
  }
  
  }
  
  // For Applying Filters
  $('#inner-box').collapse(false);
  $('#inner-box2').collapse(false);
  
  // For changing NavBar-Toggler-Icon
  var icon = document.getElementById('icon');
  
  function chnageIcon() {
  count2++;
  if (count2 % 2 != 0) {
  icon.innerText = "";
  icon.innerHTML = '<span class="far fa-times-circle" style="width:100%"></span>';
  icon.style.paddingTop = "5px";
  icon.style.paddingBottom = "5px";
  icon.style.fontSize = "1.8rem";
  
  
  }
  else {
  icon.innerText = "";
  icon.innerHTML = '<span class="navbar-toggler-icon"></span>';
  icon.style.paddingTop = "5px";
  icon.style.paddingBottom = "5px";
  icon.style.fontSize = "1.2rem";
  }
  }
  
  // Showing tooltip for AVAILABLE COLORS
  $(function () {
  $('[data-tooltip="tooltip"]').tooltip()
  })
  
  // For Range Sliders
  var inputLeft = document.getElementById("input-left");
  var inputRight = document.getElementById("input-right");
  
  var thumbLeft = document.querySelector(".slider > .thumb.left");
  var thumbRight = document.querySelector(".slider > .thumb.right");
  var range = document.querySelector(".slider > .range");
  
  var amountLeft = document.getElementById('amount-left')
  var amountRight = document.getElementById('amount-right')
  
  function setLeftValue() {
  var _this = inputLeft,
  min = parseInt(_this.min),
  max = parseInt(_this.max);
  
  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
  
  var percent = ((_this.value - min) / (max - min)) * 100;
  
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  amountLeft.innerText = parseInt(percent * 100);
  }
  setLeftValue();
  
  function setRightValue() {
  var _this = inputRight,
  min = parseInt(_this.min),
  max = parseInt(_this.max);
  
  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
  
  var percent = ((_this.value - min) / (max - min)) * 100;
  
  amountRight.innerText = parseInt(percent * 100);
  thumbRight.style.right = (100 - percent) + "%";
  range.style.right = (100 - percent) + "%";
  }
  setRightValue();
  
  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);
  
  inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
  });
  inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
  });
  inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
  });
  inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
  });
  
  inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
  });
  inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
  });
  inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
  });
  inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
  });
  });

  AOS.init();