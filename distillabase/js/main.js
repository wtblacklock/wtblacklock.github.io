// GLOBAL VARIABLES -------

// The images array should hold 6 objects. Refer to the cheatsheet
var pages = [
	{
		src:'images/image_1.jpg',
},
	{
		src:'images/image_2.jpg',
},
	{
		src:'images/image_3.jpg',
},
	{
		src:'images/image_4.jpg',
},
	{
		src:'images/image_5.jpg',
		cap:'Leather Notebook'
},
	{
		src:'images/image_6.jpg',
		cap:'Box with Type'
	}
];

// Set a variable for the current position(index) and give it an initial value of 0
var indexNumber = 0;


// Every 3 seconds this code will run

setInterval(function () {
	console.log(indexNumber);

	// Update the current position
	if (indexNumber < 5) {
		indexNumber += 1;
	} else {
		indexNumber = 0;
	}

$('#image-to-vote-on').attr('src',images[0].src, images[1].src, images[2].src, images[3].src, images[5].src, images[6].src)
	// Update the src attribute of the image to the url that's stored within the
	// src property for the object at the indexNumber in the array
	// Hint: to update the src: $('yourSelectorHere').attr('src', arrayName[indexNumber].propertyName)


}, 3000);

// When the user clicks on the hamburger-icon
$('.hamburger-icon').on('click', function (e) {
  e.preventDefault();

  // Use jQuery to toggle the active class on the hamburger-icon that was clicked
  $(this).toggleClass('active');
});
