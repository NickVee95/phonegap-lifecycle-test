var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false); 
//creates a new event listener, internal device 
//running listening out for a specific event from the phone (Device ready).
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count); //event listener
	$("#resumed").text("Application paused: " + paused_count); //event listener
	$("#paused").text("Application resumed: " + resumed_count); //event listener
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false); //event handler
	document.addEventListener("pause", onPause, false); //event handler
	
	launched_count++;
	updateDisplay();
	    
	console.log("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	console.log("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	console.log("resume");
    }
