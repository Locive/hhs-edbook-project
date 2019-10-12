function U_Were_Fooled(){
	updateButton("HAHAHAHA");
	var blarg = new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
        //do stuff
        updateButton("HOHOHOHOHO");
    })
    var laugh="Hee ";
    
    for(x=1;x<10000;x++){
    	(function(x) {
    	console.log("In loop: " + x.toString());
    	var output = ""; 
        for(y=0;y<x;y++){
            output = output + laugh;
        }
    	setTimeout(function() {
             document.getElementById("LAUGH").innerHTML+=output;
         }, 10*x);
    }(x));
    }
}

function updateButton(buttonText){
	var editElem = document.getElementById("YEAH");
	editElem.value=buttonText;
}