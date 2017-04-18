(function() {
	var img = document.getElementById('img');

	addEventListener('keydown', encender);
	addEventListener('keyup', apagar);

	var imgArray = [];

    for (i = 65; i < 91; i++) { 
      imgArray[i-65] = new Image();
		  imgArray[i-65].src = "img/"+i+".gif";        
    }

	function encender(e) {		
		var tecla = e.which;
		var n_img = 'img/' + tecla + '.gif';
		if(e.which >= 65 && e.which <=90) {
			img.src = n_img;
		}
	}

	function apagar() {
		img.src = 'img/vacio.gif';
	}
})();
