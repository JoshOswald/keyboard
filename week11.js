let num = 8;
let osc;
let playing;
let quantize = false;
let scale;
let echo = false;
let sp = [];

//bouncing circles
let dx = [];
let dy = [];
let y = [];
let x = [];
let col = [];
let tCol = [];
let note = ["Q","W","E","R","T","Y","U","I"];
let a = 0;


const diatonic = [27.5, 30.87, 32.7, 36.71, 41.2, 43.65, 49.0, 55.0, 61.74, 65.41, 73.42, 82.41, 87.31, 98.0, 110.0, 123.47, 130.81, 146.83, 164.81, 174.61, 196.0, 220.0, 246.94, 261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.0, 987.77, 1046.5];
const chromatic = [27.5, 29.14, 30.87, 32.7, 34.65, 36.71, 38.89, 41.2, 43.65, 46.25, 49.0, 51.91, 55.0, 58.27, 61.74, 65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98.0, 103.83, 110.0, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.0, 196.0, 207.65, 220.0, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.0, 415.3, 440.0, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.25, 698.46, 739.99, 783.99, 830.61, 880.0, 932.33, 987.77, 1046.5];

function setup() {
  scale = diatonic;
  cw = windowWidth;
  ch = windowHeight;
  createCanvas(cw,ch);
  frameRate(30);
  osc = new p5.Oscillator("triangle");
  delay = new p5.Delay();
  // oscillator, rate, feedback, low pass freq
  delay.process(osc, 0.5, 0.7, 800);
  delay.drywet(0);

  let temp = windowWidth/8;
  let move = 0;
  for(let i = 0; i < 8; ++i){
    x[i] = 0 + move;
    y[i] = 0;
    dy[i] = windowHeight;
    dx[i] = windowWidth/8;
    move = move + temp;
    col[i] = color(0,0,0);
    tCol[i] = color(256,256,256);
  }
}

function draw() {
  if (playing) {
    let f = map(mouseX, 0, width, 27.5, 1046.5, true);
    //let a = map(mouseY, 0, height, 1, 0, true);
    if (quantize) {
      f = scale.sort((a, b) => Math.abs(f - a) - Math.abs(f - b))[0];
    }
    osc.freq(a, 0.01);
    osc.amp(1, 0.1);
  }
  for(let i = 0; i < 8; ++i){
    fill(col[i]);
    rect(x[i],y[i],dx[i],dy[i]);
    fill(tCol[i]);
    textSize(30);
    text(note[i],x[i] + 50,dy[i] - 200);
  }
}

function keyPressed() {
  if (key === "q") {
    osc.start();
    osc.amp(0);
    col[0] = color(256,256,256);
    tCol[0] = color(0,0,0);
    playing = true;
    a = 830;
    osc.freq(a, 0.01);
    osc.amp(1, 0.1);
  } else
  if (key === "w") {
    osc.start();
    osc.amp(0);
    col[1] = color(256,256,256);
    tCol[1] = color(0,0,0);
    playing = true;
    a = 440;
  }
  if (key === "e") {
    osc.start();
    osc.amp(0);
    col[2] = color(256,256,256);
    tCol[2] = color(0,0,0);
    playing = true;
    a = 493;
  }
  if (key === "r") {
    osc.start();
    osc.amp(0);
    col[3] = color(256,256,256);
    tCol[3] = color(0,0,0);
    playing = true;
    a = 523;
  }
  if (key === "t") {
    osc.start();
    osc.amp(0);
    col[4] = color(256,256,256);
    tCol[4] = color(0,0,0);
    playing = true;
    a = 587;
  }
  if (key === "y") {
    osc.start();
    osc.amp(0);
    col[5] = color(256,256,256);
    tCol[5] = color(0,0,0);
    playing = true;
    a = 659;
  }
  if (key === "u") {
    osc.start();
    osc.amp(0);
    col[6] = color(256,256,256);
    tCol[6] = color(0,0,0);
    playing = true;
    a = 698;
  }
  if (key === "i") {
    osc.start();
    osc.amp(0);
    col[7] = color(256,256,256);
    tCol[7] = color(0,0,0);
    playing = true;
    a = 740;
  }
}

function keyReleased(){
  if (key === "q"){
    osc.amp(0, 0.1);
    playing = false;
    col[0] = color(0,0,0);
    tCol[0] = color(256,256,256);
  }
  if (key === "w"){
    osc.amp(0, 0.1);
    playing = false;
    col[1] = color(0,0,0);
    tCol[1] = color(256,256,256);
  }
  if (key === "e"){
    osc.amp(0, 0.1);
    playing = false;
    col[2] = color(0,0,0);
    tCol[2] = color(256,256,256);
  }
  if (key === "r"){
    osc.amp(0, 0.1);
    playing = false;
    col[3] = color(0,0,0);
    tCol[3] = color(256,256,256);
  }
  if (key === "t"){
    osc.amp(0, 0.1);
    playing = false;
    col[4] = color(0,0,0);
    tCol[4] = color(256,256,256);
  }
  if (key === "y"){
    osc.amp(0, 0.1);
    playing = false;
    col[5] = color(0,0,0);
    tCol[5] = color(256,256,256);
  }
  if (key === "u"){
    osc.amp(0, 0.1);
    playing = false;
    col[6] = color(0,0,0);
    tCol[6] = color(256,256,256);
  }
  if (key === "i"){
    osc.amp(0, 0.1);
    playing = false;
    col[7] = color(0,0,0);
    tCol[7] = color(256,256,256);
  }
  //return false;
}