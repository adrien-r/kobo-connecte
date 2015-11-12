// Shorthand for $( document ).ready()
getfrequence = function(){
	plage_haute={min:5,max:10};
	var d = new Date();	
	actu=d.getHours()
	console.log(actu)
	if (actu > plage_haute.min && actu < plage_haute.max) {
		return 30*1000;
	}
	else {
		return 120*1000;
	}

}

getstationdispo=function(idstation,frequence) {
	var urlstation = "https://api.jcdecaux.com/vls/v1/stations/"+idstation+"?contract=Lyon&apiKey=addb40478b11ae921dc250fea77e05335e7549a4"
	$.get( urlstation, function( data ) {
		 	 	
		$("#sta_"+idstation).html(data.available_bikes)
		setTimeout(refresh, frequence);	
	 });
};



refresh = function(){
	getstationdispo(7053,getfrequence())
	getstationdispo(7016,getfrequence())	

};
	

$(function() {
  	console.log( "ready!" );
	refresh();

});
