import { loadImage } from './mapLoader';
import * as BABYLON from 'babylonjs';
import { createGround } from './mapCreator';

var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

loadImage('l1', startGame);

var createScene = function ( mapData ) {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera",BABYLON.Tools.ToRadians(-135), BABYLON.Tools.ToRadians(60), 20.0, new BABYLON.Vector3(0,0,0), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 10, 0), scene);

    createGround(mapData, scene);

    return scene;
};
/******* End of the create scene function ******/    

function startGame( mapData ){

    var scene = createScene(mapData); //Call the createScene function

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () { 
        scene.render();
    });
}

// Watch for browser/canvas resize events
window.addEventListener("resize", function () { 
    engine.resize();
});


