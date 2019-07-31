$(document).ready(function() {
  $('form#onlineorder').submit(function(event) {
	var firstnameInput = $('input#firstname').val();
	var lastnameInput = $('input#lastname').val();
	var addressInput = $('input#address').val();
	var cityInput = $('input#city').val();
	var stateSelect = $('select#state').val();
	var zipInput = $('input#zip').val();
	var phoneInput = $('input#phone').val();
	var contactemailInput = $('input#contactemail').val();
	var contactphoneInput = $('input#contactphone').val();

	$('.firstname').text(firstnameInput);
	$('.lastname').text(lastnameInput);
	$('.address').text(addressInput);
	$('.city').text(cityInput);
	$('.state').text(stateSelect);
	$('.zip').text(zipInput);
	$('.phone').text(phoneInput);
	$('.contactemail').text(contactemailInput);
	$('.contactphone').text(contactphoneInput);

	alert('Congrats on your order!')

    $('#confirmation').show();

    event.preventDefault();
  });
});