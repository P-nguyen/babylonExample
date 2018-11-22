
function getMapData(){
    var canvas = document.createElement("CANVAS");
    var context = canvas.getContext('2d');
    context.drawImage(imageObj, 0, 0, 32, 32);
    console.log(context.getImageData(0, 0, 32, 32).data);
    debugger;
}

var imageObj = new Image();
imageObj.onload = function() {
    getMapData(this);
};
imageObj.crossOrigin = '';
imageObj.src = '';

