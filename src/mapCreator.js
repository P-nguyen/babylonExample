export function createGround( mapData, scene ){
        var ground = [];
        var pixelCount = 0;

        var greenMat = new BABYLON.StandardMaterial('greenMat', scene);
        greenMat.diffuseColor = BABYLON.Color3.Green();

        for(var i = 0; i<32; i++){
                for (var k = 0; k<32; k++){
                        let name = 'ground'+i+k;
                        // console.log(name);
                        // let plane = BABYLON.MeshBuilder.CreateGround( name , {width:2,height:2, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
                        let box = BABYLON.MeshBuilder.CreateBox(name, {height: 2, width: 2, depth: 2}, scene);
                        box.position = new BABYLON.Vector3(i*2, mapData[pixelCount], k*2);

                        //create animation
                        var randNum = Math.random();
                        var randPos =  mapData[pixelCount] - (randNum * 2);
                        var startPos = mapData[pixelCount]; 
                        var endPos =  mapData[pixelCount]-2;
                        var frameRate = 30;
                        var yBounce = new BABYLON.Animation("yBounce", "position.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                        var keyFrames = []; 

                        var frame1 = ((randPos-endPos)/ 2) * (frameRate/2);
                        var frame2 = frame1 + frameRate/2;
                        keyFrames.push({
                                frame: 0,
                                value: randPos
                        });

                        keyFrames.push({
                                frame: frame1,
                                value: endPos
                        });

                        keyFrames.push({
                                frame: frame2,
                                value: startPos
                        });

                        keyFrames.push({
                                frame: frameRate,
                                value: randPos
                        });

                        yBounce.setKeys(keyFrames);

                        scene.beginDirectAnimation(box, [yBounce], 0, frameRate, true, 0.1);
                        

                        if(i%2 == true){
                                if(k%2 == true){ box.material = greenMat; }
                        }else{
                                if(k%2 == false){ box.material = greenMat; }
                        }
                        pixelCount++;
                }
        }
        return ground
}

