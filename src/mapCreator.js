export function createGround( mapData, scene ){
        var ground = [];
        var pixelCount = 0;

        var greenMat = new BABYLON.StandardMaterial('greenMat', scene);
        greenMat.diffuseColor = BABYLON.Color3.Green();
        debugger;
        for(var i = 0; i<32; i++){
                for (var k = 0; k<32; k++){
                        let name = 'ground'+i+k;
                        // console.log(name);
                        let plane = BABYLON.MeshBuilder.CreateGround( name , {width:2,height:2, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
                        plane.position = new BABYLON.Vector3(i*2, mapData[pixelCount], k*2);

                        if(i%2 == true){
                                if(k%2 == true){ plane.material = greenMat; }
                        }else{
                                if(k%2 == false){ plane.material = greenMat; }
                        }
                        pixelCount++;
                }
        }
        return ground
}

