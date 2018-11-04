var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.White();

    var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
    var box2 = BABYLON.Mesh.CreateBox("Box2", 4.0, scene);
    var material = new BABYLON.StandardMaterial("material1", scene);
    material.wireframe = true;
    box2.material = material;
    box2.position = new BABYLON.Vector3(0,5,0);

    // var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0,0,-10), scene);
    // camera.setTarget(BABYLON.Vector3.Zero());
    // camera.attachControl(canvas, true);

    // camera.keysUp.push(87); //keyboard key code for wasd
    // camera.keysDown.push(83);
    // camera.keysLeft.push(65);
    // camera.keysRight.push(68);
    
    //#############################

    // var camera = new BABYLON.ArcRotateCamera("arcCamera", BABYLON.Tools.ToRadians(45), BABYLON.Tools.ToRadians(45), 10.0, box.position, scene)
    // camera.attachControl(canvas, true);

    //##############################

    var camera = new BABYLON.FollowCamera('followCam', BABYLON.Vector3.Zero(), scene);
    camera.lockedTarget = box;
    camera.radius = 50; // dist form target
    camera.heightOffset = 10; //height of view
    camera.attachControl(canvas, true);

    return scene;
}

var scene = createScene();

//runRenderloops bases is 60fps. will rerender everything inside.
engine.runRenderLoop(function(){
    scene.getMeshByName("Box").position.z -= 0.01;
    scene.render();
});