
(function ($) {
    "use strict";

    $( '#addToCart_BAG01' ).click(function() {
			fbq('track', 'AddToCart', {
				value: 75,
				currency: 'USD',
				content_ids: 'BAG-01',
				content_type: 'product',
			});
		});

		$( '#addToCart_JACK01' ).click(function() {
			fbq('track', 'AddToCart', {
				value: 92.50,
				currency: 'USD',
				content_ids: 'JACK-01',
				content_type: 'product',
			});
		});

		$( '#addToCart_COACH01' ).click(function() {
			fbq('track', 'AddToCart', {
				value: 165.90,
				currency: 'USD',
				content_ids: 'COACH-01',
				content_type: 'product',
			});
		});

		$( '#addToCart_SHORTS01' ).click(function() {
			fbq('track', 'AddToCart', {
				value: 15.90,
				currency: 'USD',
				content_ids: 'SHORTS-01',
				content_type: 'product',
			});
		});

    $( '#addToCart_MUG01' ).click(function() {
			fbq('track', 'AddToCart', {
				value: 22,
				currency: 'USD',
				content_ids: 'MUG-01',
				content_type: 'product',
			});
		});

		$( '#subscribe' ).click(function() {
			fbq('track', 'Subscribe');
		});

})(jQuery);
