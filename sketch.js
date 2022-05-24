let j;
function setup() {
  createCanvas(400, 200);
  j = 0
}

function draw() {
  background(200);

  strokeWeight(2)
  line(200,0,200,200);

  //KIRI
  //kepala
  ellipse(100, 50, 80, 80);
  //mata
  ellipse(80, 40, 20, 10);
  ellipse(120, 40, 20, 10);
  //mulut
  ellipse(100, 70, 20, 10);
  //badan
  triangle(100, 90, 50, 150, 150, 150);

  //KANAN
  //kepala
  var a = 100 + 5*Math.sin(PI*j/20)
  j+=1
  ellipse(300, 50, a, 80);
  //mata
  ellipse(280, 40, 20, 10);
  ellipse(320, 40, 20, 10);
  //mulut
  ellipse(300, 70, 20, 10);

  //badan
  triangle(300, 90, 250, 150, 350, 150);

  //Warna
  fill(240,192,35)
}