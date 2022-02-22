const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling";
var bg="Sprites/bg1.png";
var score=0;

function preload() {
    //backgroundImg = loadImage("sprites/bg - fondo.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    //ejemplo de diferentes tipos de datos

    //cadena
    var string = "esto es una cadena";
    console.log(string);

    //tipo de datos numéricos
    var num = 100;
    console.log(num);

    //tipo de dato booleano
    var bool = false;
    console.log(bool);

    //tipo de dato indefinido
    var object;
    console.log(object);
    
    //tipo de dato nulo
    object=null;
    console.log(object);

    //ejemplos de matrices

    //matriz con el mismo tipo de dato
    var matriz1 = [9,10,9];
    console.log(matriz1);

    //matriz con diferente tipo de dato
    var matriz2 = [9,false,"peluche"];
    console.log(matriz2);

    //matriz con lista de matrices
    var matriz3 = [["jugete",10,9],[9,false,"peluche"],[5,"perro",7],[false,"gato"]];
    console.log(matriz3);

    //acceder al elemento peluche
    console.log(matriz3[1][2]);
    console.log(matriz3[0][0]);
    console.log(matriz3[2][1]);
    console.log(matriz3[3][1]);

    //arega un nuevo valor dentro de una matriz y agregala a tu matriz 3
    matriz3.push("Mateo");
    console.log(matriz3);

    //quitar el último valor de la matriz
    matriz3.pop();
    console.log(matriz3);
    
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    noStroke();
    textSize(35);
    fill("white");
    text("puntuación:"+score,width-300,50);
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 
    
    //this.getBackgroundImg();

}

function mouseDragged(){
    if(gameState !== "launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode===32){
     //slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    //console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    //console.log(hour);
    if(hour>=06&&hour<=19){
       bg = "Sprites/bg1.png"; 
    }
    else{
       bg="Sprites/bg2.png"
    }
    backgroundImg=loadImage(bg);
    console.log(backgroundImg);

}