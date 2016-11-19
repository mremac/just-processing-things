var sketches = ["oi",  "blossoms", "insaneinthemembrane", "jelly"];

window.onload = function (){
	var sketchName = getParameterByName('sketch');
	if(sketchName =='' || sketchName == null){
		sketchName = 'grid';
	}
	var htmlStr = '<canvas id="canvas" name="' + sketchName + '" data-processing-sources="' + sketchName + '.pde"></canvas>';
    console.log(htmlStr);
	$('#canvas').replaceWith(htmlStr);
	Processing.reload();
}

function nextSketch(){
    var currentLoc = $.inArray($('#canvas').attr('name'), sketches);
    currentLoc ++;
    if(currentLoc >= sketches.length){
        currentLoc = 0;
    }
	window.location = 'http://www.ericinbrackets.co/test/?sketch=' + sketches[currentLoc];                
}

// localhost:8000/index.html

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}