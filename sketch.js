//projeto 5 - controlando o mouse

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(mouseX,mouseY,20);
  if(mouseX > width){
    text("Mouse fora da tela",150,200);
   
  }
  if(mouseY > height){
    text ("Mouse fora da tela",150,200);
  }
  if(mouseX < 0){
    text("Mouse fora da tela",150,200)
  }
 
}