song = "";
song_1 = "";

function preload()
{
    song = loadSound("glory_or_nothinng.mp3");
    song_1 = loadSound("the_beast_three.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);


    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized!');
} 
function draw()
{
    image(video,0,0,600,500);
    
    fill("#FFFF00");
    stroke("#FFFF00");

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);

        song_2.stop();

    }
    if(song_1 == false){

        song_1.play();

        document.getElementById("song_name_button").innerHTML = "Song Name:" + song_1;
    }
}
function isPlaying()
{
    if(song_1 == false ){
        song_2.play();
    }
    else{
        song_1.play();
    
    }
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX =" + leftWristX + "LeftWristY" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX =" + rightWristX + "RightWristY" + rightWristY);

    }
}