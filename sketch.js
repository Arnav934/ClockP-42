var hr, sc, mn;
var secondAngle, minuteAngle, hourAngle;

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  
  hr = hour();
  sc = second();
  mn = minute();
  translate(displayWidth/2, displayHeight/2);
  rotate(-90);
  secondAngle = map(sc, 0, 60, 0, 360);
  minuteAngle = map(mn, 0, 60, 0, 360);
  hourAngle = map(hr%12, 0, 12, 0, 360)
  push();
  stroke("red");
  strokeWeight(8);
  rotate(secondAngle);
  line(0,0,100,0);
  pop();
  push();
  stroke("blue");
  strokeWeight(8);
  rotate(minuteAngle);
  line(0,0,75,0);
  pop();
  push();
  stroke("yellow");
  strokeWeight(8);
  rotate(hourAngle);
  line(0,0,50,0);
  pop();
  
  stroke(255,0,255); point(0,0) 
  //drawing the arcs 
  strokeWeight(10); noFill(); 
  //Seconds 
  stroke("red"); arc(0,0,300,300,0,secondAngle); 
  //Minutes 
  stroke("blue"); arc(0,0,280,280,0,minuteAngle); 
  //Hour 
  stroke("yellow"); arc(0,0,260,260,0,hourAngle);
}
