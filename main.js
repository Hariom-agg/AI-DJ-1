

song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("cali-1171.mp3");
    song2 = loadSound("melody-of-nature-main-6672.mp3");
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 400);
}