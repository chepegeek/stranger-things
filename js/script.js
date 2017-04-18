(function() {
	var img = document.getElementById('img');

	addEventListener('keydown', encender);

	function encender(e) {		
		var tecla = e.which;
		var n_img = 'img/' + tecla + '.gif';
		if(e.which >= 65 && e.which <=90) {
			img.src = n_img;
		}
	}		

})();
