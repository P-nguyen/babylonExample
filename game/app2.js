var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.White();

    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0,10,-10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    
    var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
    return scene;
}

var scene = createScene();

//runRenderloops bases is 60fps. will rerender everything inside.
engine.runRenderLoop(function(){
    scene.render();
});