
// $('nav a').on('click', function (e) {
// 	e.preventDefault();
// })

var pages = [
	{
		class:'.center-home',
},
	{
		class:'.center-features',
},
	{
		class:'.list-container',
}
];

var indexNumber = 0;

$('#next').on('click', function (e) {
	e.preventDefault();
		console.log(indexNumber);

		if (indexNumber < 2) {
			indexNumber += 1;
		} else {
			indexNumber = 0;
		}

	$('.page').hide();
	$('.center-features').css("display", "flex") .hide();
	$(pages[indexNumber].class).fadeIn();
})


$('#prev').on('click', function (e) {
	e.preventDefault();
		console.log(indexNumber);

		if (indexNumber > 0) {
			indexNumber -= 1;
		} else {
			indexNumber = 2;
		}

	$('.page').hide();
	$('.center-features').css("display", "flex") .hide();
	$(pages[indexNumber].class).fadeIn();
})


$('#about').on('click', function() {
    $('.drawer-about').addClass('active');
});

$('.close').on('click', function() {
    $('.drawer-about').removeClass('active');
});

$('#notify').on('click', function() {
    $('.drawer-notify').addClass('active');
});

$('.close').on('click', function() {
    $('.drawer-notify').removeClass('active');
});



// When the user clicks on the hamburger-icon
$('.hamburger-icon').on('click', function (e) {
  e.preventDefault();

  // Use jQuery to toggle the active class on the hamburger-icon that was clicked
  $(this).toggleClass('active');
});
