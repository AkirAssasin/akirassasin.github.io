/* @pjs transparent="true"; font='layout/styles/font.ttf' */

float thick = 2;
float width = window.innerWidth - 10;
float pwidth = 30;
float[] warpline = new float[height - thick];
color[] warpcol = new color[height - thick];
float height = 70;

var myfont = loadFont("layout/styles/font.ttf"); 

void setup() {
  size(width,height);
  background(0,0);
  noFill();
  for(int i; i < height - thick; i++) {
    warpline[i] = pwidth - thick;
    warpcol[i] = color(150 + random(-1,1));
  }
}

void draw() {
  background(0,0);
  strokeWeight(thick);
  stroke(255);
  rect(width/2 - pwidth/2,0,pwidth,height);
  translate(random(-0.5,0.5),0);
  for(int i; i < height - thick; i++) {
    warpline[i] += random(-1,1);
    strokeWeight(1);
    stroke(warpcol[i]);
    line(width/2 - pwidth/2,i + thick/2,width/2 + warpline[i]/2,i + thick/2);
  }
  textFont(myfont,pwidth*2);
  textAlign(CENTER,CENTER);
  translate(0,random(-0.5,0.5));
  text("PROJECT LIBRANUS",width/2,height/2);
}