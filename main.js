function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded () {
    console.log('PoseNet Is Initialized!');
}


function draw() {
    background('grey');
}


function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result);
    }
}