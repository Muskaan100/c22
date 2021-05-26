const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;
var myEngine,myWorld;
var ground ;
var ball;
function setup() {
  createCanvas(800,400);
  myEngine=engine.create();
  myWorld=myEngine.world;
  var ground_options={
    isStatic:true
  }
  ground=bodies.rectangle(100,350,600,10,ground_options);
  world.add(myWorld,ground);
  console.log(ground);
  
  var ballbounce={
  restitution:1.0
  }
  ball=bodies.circle(250,200,20,ballbounce);
  world.add(myWorld,ball);
}

function draw() {
  background("blue");  
  engine.update(myEngine);
  rect(ground.position.x,ground.position.y,600,10);
  ellipse(ball.position.x,ball.position.y,20,20);
}