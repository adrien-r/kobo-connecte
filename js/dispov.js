// Shorthand for $( document ).ready()

getstationdispo=function(idstation) {
	var urlstation = "https://api.jcdecaux.com/vls/v1/stations/"+idstation+"?contract=Lyon&apiKey=addb40478b11ae921dc250fea77e05335e7549a4"
	$.get( urlstation, function( data ) {
 	 	console.log( data.name );
		
	
	 });
};

$(function() {
  	console.log( "ready!" );
	getstationdispo(7053)
});
