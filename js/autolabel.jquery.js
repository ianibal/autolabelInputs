(function($){

	$.fn.autolabel = function(){

		$(this).wrap( "<div class='autolabel'></div>" );

		$(this).parent().prepend('<span></span>');

		$(this).focus(function(){
			$(this).parent().addClass('focused');

			var placeholder = $(this).attr('placeholder');
			$(this).parent().children('span').text(placeholder);
		});

		$(this).focusout(function(){
			$(this).parent().removeClass('focused');
		});

		$(this).keyup(function(){
			var elementLength = $(this).val().length;

			if(elementLength != 0){
				$(this).parent().addClass('show-label');
			}else{
				$(this).parent().removeClass('show-label');
			}
		});
	};

})(jQuery);