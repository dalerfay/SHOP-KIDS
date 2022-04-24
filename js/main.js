$(document).ready(function () {
	

	$('#header__burger').on('click', function (e) {
	  $('#menu').toggleClass('active');
	});

	$('#click-menu').on('click', function (e) {
		$('#menu').toggleClass('active');
	});


});



var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  $(document).ready(function() {
    var numbers = 1;
    $('#numbers').text(numbers);

    $('#minus').on('click', function () {
      numbers = numbers + 1;
      $('#numbers').text(numbers);
    });
    $('#plus').on('click', function () {
      if (numbers > 1) {
        numbers = numbers - 1;
        $('#numbers').text(numbers);
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    $( ".js-accordion" ).accordion({
        collapsible: true,
        active: false,
        icons: false,
        heightStyle: 'content'
      });
  });
  
  
 