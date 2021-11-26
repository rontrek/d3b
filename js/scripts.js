
$( document ).ready( $('#slider').jqSlide({'defaultSlide': 1, 'tabLocation': 'bottom'}) )

$( document ).ready( function() {
	setInterval(loopSlide, 5000);
});

function loopSlide(){ 	
	var at = $("li.active-tab");
    counter = parseInt(at.attr("id").replace(/[^\d.]/g,''));             
    counter++;    
    if(counter === 6) {
        counter = 1;
    }       
    jqSlide.initiateSlide(counter);
    //console.log(counter);
}