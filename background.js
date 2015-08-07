//var iframe = $('#gsft_main').contents()
//iframe.find("#element\\.incident\\.close_code").show()
//iframe.find("#element\\.incident\\.close_notes").show()
console.log("Hello World");

setInterval(function(){ Show_Resolution_fields(); }, 3000);

function Show_Resolution_fields() {
	var iframe = $('#gsft_main');
	if (iframe != null) {
		iframe.contents().find("#element\\.incident\\.close_code").show()
		iframe.contents().find("#element\\.incident\\.close_notes").show()
		console.log("Unhide Resolution Notes")
	}
	else{
		console.log("Could not find iframe");	
	}
}