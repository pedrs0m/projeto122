function preload() {

}
function setup() {
   canvas = createCanvas(640, 480);
   canvas.position(110, 250);
   video = createCapture(VIDEO);
   video.hide()

   tintColor = ""
}

function draw() {
  image(video, 0, 0 ,650 ,480);
  
  tint(tintColor);
}
function TakeSnapshot()
{
save('studentName.png');

}

function filter_tint()
{
    tintColor = document.getElementById("colorName").value;
}