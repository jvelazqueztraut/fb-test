
(function ($) {
    "use strict";

    $('.block2-btn-addcart').each(function(){
			var productName = $(this).parent().parent().parent().find('.block2-name').text();
			var productId = $(this).parent().parent().parent().find('.block2-id').text().split(' ').pop();
			if( $(this).parent().parent().parent().find('.block2-newprice').html() ){
				var productPrice = Number($(this).parent().parent().parent().find('.block2-newprice').text().replace(/[^0-9.-]+/g,""));
			}
			else{
				var productPrice = Number($(this).parent().parent().parent().find('.block2-price').text().replace(/[^0-9.-]+/g,""));
			}
			$(this).on('click', function(){
				fbq('track', 'AddToCart', {
					value: productPrice,
					currency: 'USD',
					content_ids: productId,
					content_type: 'product',
				});
				//swal(productName, "is added to cart !", "success");
			});
		});

		/*$( '#subscribe' ).click(function() {
			fbq('track', 'Subscribe');
		});*/

})(jQuery);
