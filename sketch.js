function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#000000');
  noStroke();
  loadJSON("astros.json", dataReceived);

  img = createImg('./amongus.png');
  img.hide();
}

function dataReceived(data){
  for (let i = 0; i < data.number; i++){
      var wth = random(200, width-200);
      var hgt = random(200, height-200);

      fill('#ffffff');
      text(data.people[i]['name'], wth, hgt);
      image(img,wth,hgt,50,40);
      text(data.people[i]['craft'], wth, hgt+50);
  }
}

function draw() { 
}