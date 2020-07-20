$(document).ready(function () {
	
var noAnswer = [
"hijo puta di algo", 
"Joder, eres peor que Ernesto... habla coño", 
];

var kashiAnswer = [
"pues a mi kashi me parece un tipo majo", 
"ese tal kashi yo me lo tiraba",
"kashi es la mejor persona del mundo",
"kashi? kashi es top persona",
];

var ernestoAnswer = [
"ernesto me come el rabo xdxxdxdxdxdxd", 
"cuantos rabos se habrá comido ernesto hoy?", 
];


var basic = [
"si puedise me hacia una baraja solo de estratas, for fun", 
"quieres q vaya y t de un masajito? o3o", 
"SISTEMA UNIX? LO CONOZCO",
"me gustan los dinosaurios :3",
"y tu cara es un mojon xdxdxdxd",
];


$( "#button-ask" ).click(function() {
  
  if($('#question-input').val() == ""){
	  $('#answer-mario').html(noAnswer[Math.floor(Math.random() * noAnswer.length)]);

  }else{
	  
	  if($('#question-input').val().includes("kashi") ||
$('#question-input').val().includes("Kashi")  ||
$('#question-input').val().includes("KASHI")  
){
	$('#answer-mario').html(kashiAnswer[Math.floor(Math.random() * kashiAnswer.length)]);  
}else{
	
	if($('#question-input').val().includes("ernesto") ||
$('#question-input').val().includes("Ernesto")  ||
$('#question-input').val().includes("ERNESTO")  
){
	$('#answer-mario').html(ernestoAnswer[Math.floor(Math.random() * ernestoAnswer.length)]);  
}else{
	
	$('#answer-mario').html(basic[Math.floor(Math.random() * basic.length)]); 
	
}
	
}
	  
  }








  
});

});