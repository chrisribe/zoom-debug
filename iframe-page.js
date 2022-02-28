

document.addEventListener('DOMContentLoaded', (event) => {
	tiggerFocusTextarea(2000);
});

function tiggerFocusTextarea(delayMs){
    setTimeout(function(){
      var tArea = document.querySelector("textarea");
      console.log(tArea);
      tArea.focus();
    }, delayMs); 
}

// https://stackoverflow.com/a/41487632
function setAreaMouseDownFocusFontsizeFix(){
	var tAreas = document.querySelectorAll('textarea');
	tAreas.forEach(function(tArea, index) {
		tArea.addEventListener("mousedown", function (e) {
		  e.target.style.fontSize = "16px";
		  console.log('mousedown fontSize');
		});

		// change font-size back to its initial value so the design will not break
		tArea.addEventListener("focus", function (e) {
		  e.target.style.fontSize = "";
		  console.log('focus fontSize clear');
		});
	});
}