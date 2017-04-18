(function() {
	var img = document.getElementById('img');

	addEventListener('keydown', encender);
	addEventListener('keyup', apagar);

	function encender(e) {		
		var tecla = e.which;
		var n_img = 'img/' + tecla + '.gif';
		if(e.which >= 65 && e.which <=90) {
			img.src = n_img;
		}
	}

	function apagar(e) {
		img.src = 'img/vacio.gif';
	}


})();
