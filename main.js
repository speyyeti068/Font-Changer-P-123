function setup(){
    video = createCapture(VIDEO);
    video.size(500,400)
    video.position(0,190);

    canvas = createCanvas(500,380);
    canvas.center();

    poseNet = ml5.poseNet(video, function(){
        console.log("Model Loaded");
    })
    
    poseNet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
}

function draw(){
    background("red");
}