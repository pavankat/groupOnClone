alert('yo');

$('.purchaseCoupon').on('click', function(e){
	alert('hi');

	e.preventDefault();

	debugger;

	var couponid = $(this).parent().data('couponid');
	var quant = $(this).siblings().eq(0).val();

	$.post("/coupons/users/create", {quantity: }, function(data){

	});
});