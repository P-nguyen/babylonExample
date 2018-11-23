
function getMapData(){
    var canvas = document.createElement("CANVAS");
    var context = canvas.getContext('2d');
    context.drawImage(imageObj, 0, 0, 32, 32);
    return context.getImageData(0, 0, 32, 32).data;
}

var imageObj = new Image();
imageObj.onload = function() {
    getMapData(this);
};
imageObj.crossOrigin = '';
imageObj.src = 'http://localhost:3000/maps/l1.png';

