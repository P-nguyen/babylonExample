// import * as BABYLON from 'babylonjs';

//helper function
export function loadImage(level, callback){    
    var imageObj = new Image();
    imageObj.crossOrigin = '';
    imageObj.src = `http://localhost:3000/maps/`+ level +`.png`;
    imageObj.onload = function(){generateWorld(imageObj,callback)};
}

function generateWorld(image, callback){
    var data = getMapHeightData(image);
    callback(data);
}

function getMapHeightData(image){
    var canvas = document.createElement("CANVAS");
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, 32, 32);
    var data = context.getImageData(0, 0, 32, 32).data;
    var pixelArray = createPixelArray(data, 'r');
    console.log(pixelArray);
    return pixelArray
}

function createPixelArray( contextData, color='r' ){
    //[165, 1, 1, 255, 177, 0, 0, 255,
    var i = 0;
    var mapFuncType;

    switch(color){
        case 'r':
        //height
        i = 0;
        mapFuncType = heightCalc;
        break;
        case 'g':
        i = 1;
        break;
        case 'b':
        i = 2;
        break;
        case 'a':
        i = 3;
        break;
    }

    var PixelArray = [];
    for(; i < contextData.length; i += 4){
        if(mapFuncType){
            PixelArray.push(mapFuncType( 10, contextData[i] ));
        }else{
            PixelArray.push(contextData[i]);
        }
        
    }
    return PixelArray;
}

function heightCalc( levelHeight, pixelColor ){
    var baseHeight = levelHeight/255;
    var planeHeight = (baseHeight)*pixelColor;
    return planeHeight;
}
