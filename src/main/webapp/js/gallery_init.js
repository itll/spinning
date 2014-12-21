

define(function(require, exports, module){
	return function($){
		$(document).ready(function() {
			$('#myRoundabout').roundabout({
				 shape: 'figure8',
				 minOpacity: 1
			});
		});
	}
});

