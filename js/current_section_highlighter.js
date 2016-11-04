$(document).ready(function(){

	if ($(window).scrollTop() === 0) {
		$('nav li a[href="#first"]').closest('li').addClass('active').siblings().removeClass('active');
	}

	$('nav li a').click(function() {
		$(this).closest('li').addClass('active').siblings().removeClass('active');
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() === 0) {
			$('nav li a[href="#first"]').closest('li').addClass('active').siblings().removeClass('active');
		}

		$('section').each(function() {
			if ($(window).scrollTop() >= $(this).offset().top - $(".main-menu").height()) {
				$('nav li a[href="#' + $(this).attr('id') + '"]').closest('li').addClass('active').siblings().removeClass('active');
			}
		});
	});
	
});