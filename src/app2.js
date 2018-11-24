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

    var material2 = new BABYLON.StandardMaterial('mat2', scene);
    material2.diffuseColor = BABYLON.Color3.Blue();
    // material2.emissiveColor = BABYLON.Color3.Red();
    // material2.specularColor = BABYLON.Color3.Red(); //what color light is when it reflects
    // material2.alpha = 0.9; //transparency
    
    // material2.diffuseTexture = new BABYLON.Texture('name.png',scene); //textures
    // material2.bumpTexture = new BABYLON.Texture('gfs_normals.png',scene);
    // material2.roughness = 0.05;

    box.material = material2;
    

    // var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0,0,-10), scene);
    // camera.setTarget(BABYLON.Vector3.Zero());
    // camera.attachControl(canvas, true);

    // camera.keysUp.push(87); //keyboard key code for wasd
    // camera.keysDown.push(83);
    // camera.keysLeft.push(65);
    // camera.keysRight.push(68);
    
    //#############################

    var camera = new BABYLON.ArcRotateCamera("arcCamera", BABYLON.Tools.ToRadians(45), BABYLON.Tools.ToRadians(45), 10.0, box.position, scene)
    camera.attachControl(canvas, true);

    //##############################

    // var camera = new BABYLON.FollowCamera('followCam', BABYLON.Vector3.Zero(), scene);
    // camera.lockedTarget = box;
    // camera.radius = 50; // dist form target
    // camera.heightOffset = 10; //height of view
    // camera.attachControl(canvas, true);

    //##############################
    //pointlight example
    var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0,10,0), scene);
    // light.diffuse = new BABYLON.Color3(1,0,0);

    // //to create light controlled by spacebar
    // scene.actionManager = new BABYLON.ActionManager(scene);
    // scene.actionManager.registerAction(
    //     new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: " "},
    //     function(){
    //         light.setEnabled(!light.isEnabled());
    //     })
    // )

    light.parent = camera;
    light.diffuse = new BABYLON.Color3(1,1,1);

    //##############################
    //spotlight example
    // var light = new BABYLON.SpotLight('spotlight', new BABYLON.Vector3(0,10,0), new BABYLON.Vector3(0,-1,0 ), BABYLON.Tools.ToRadians(45), 0.1, scene);

    return scene;
}

var scene = createScene();

//runRenderloops bases is 60fps. will rerender everything inside.
engine.runRenderLoop(function(){
    // scene.getMeshByName("Box").position.z -= 0.01;

    //##################LIGHT CHANGES########################
    // var light = scene.getLightByName("pointLight");
    // light.diffuse.b += .01;
    // light.diffuse.g += .01;

    //################ spotlight ##################
    // var light = scene.getLightByName("spotlight");
    // light.position.y -= 0.01;

    //##################### material transparency #############
    // var material = scene.getMeshByName("Box").material;
    // material.alpha -= 0.01;
    // if(material.alpha < 0.01){ material.alpha = 1}
    
    scene.render();
    
});