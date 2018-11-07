var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera",BABYLON.Tools.ToRadians(-135), BABYLON.Tools.ToRadians(60), 20.0, new BABYLON.Vector3(0,0,0), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 10, 0), scene);

    // Add and manipulate meshes in the scene
//     var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
createGround();
//     var plane = BABYLON.MeshBuilder.CreateGround("GroundPlane", {width:2, height:2,  sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
//     var plane2 = BABYLON.MeshBuilder.CreateGround("GroundPlane2", {width:2, height:2,  sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
//     plane2.position = new BABYLON.Vector3(0, 0, 2);


    return scene;
};
/******* End of the create scene function ******/    

var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () { 
        scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () { 
        engine.resize();
});



function createGround(){
        var ground = [];

        var greenMat = new BABYLON.StandardMaterial('greenMat', scene);
        greenMat.diffuseColor = BABYLON.Color3.Green();
    

        for(var i = 0; i<32; i++){
                for (var k = 0; k<32; k++){
                        let name = 'ground'+i+k;
                        // console.log(name);
                        let plane = BABYLON.MeshBuilder.CreateGround( name , {width:2,height:2, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
                        plane.position = new BABYLON.Vector3(i*2, 0, k*2);

                        if(i%2 == true){
                                if(k%2 == true){ plane.material = greenMat; }
                        }else{
                                if(k%2 == false){ plane.material = greenMat; }
                        }

                }
        }

        return ground
}