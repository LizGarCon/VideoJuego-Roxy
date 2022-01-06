var edges;
var gameState = 1;
var bg1, bg2, bg3, bg4;
var jake;
var ghost;
function preload() {
    bg1 = loadImage("fondos/Slide1.PNG");
    bg2 = loadImage("fondos/Slide2.PNG");
    bg3 = loadImage("fondos/Slide3.PNG");
    bg4 = loadImage("fondos/bg.jpg");
    jakeRight = loadAnimation("Jake/jake-1-1.png", "Jake/jake-2-1.png", "Jake/jake-0-1.png");
    ghostLeft = loadAnimation("Ghost/ghost-00-00.png", "Ghost/ghost-02-01.png", "Ghost/ghost-03-01.png")
}


function setup() {
    createCanvas(2000, 1200);

    jake = createSprite(80, 600, 50, 50);
    jake.addAnimation("jakeRight", jakeRight);
    jake.scale = 0.7;
    jake.visible = false;

    ghost = createSprite(1000, 600, 50, 50);
    ghost.addAnimation("ghostLeft", ghostLeft);
    ghost.scale = 4;
    ghost.visible = false;
}

function draw() {
    edges = createEdgeSprites();
    console.log(gameState);
    background("black");

    // Control de estados del Juego
    if (gameState === 1) {
        background(bg1);
        if (keyDown("space")) {
            gameState = 2;
        }
    }
    else if (gameState === 2) {
        background(bg2);
        if (keyDown("space")) {
            gameState = 3;
        }
    }
    else if (gameState === 3) {
        background(bg3);
        if (keyDown("space")) {
            gameState = 4;
        }
    }
    else if (gameState === 4) {
        background(bg4);
        jake.visible = true;

        if (keyDown("space")) {
            gameState = "PLAY";
        }
    }
    else if (gameState === "PLAY") {
        background(bg4);
        jake.visible = true;
        ghost.visible = true;
        //Movimientos Jake
        if (keyDown(RIGHT_ARROW)) {
            jake.x = jake.x + 5;
        }
        if (keyDown(LEFT_ARROW)) {
            jake.x = jake.x - 5;
            //Cargar Animación Jake derecha a izquierda
        }
        if (keyDown(UP_ARROW)) {
            jake.y = jake.y - 5;
            //Cargar Animación Jake hacia arriba
        }
        if (keyDown(DOWN_ARROW)) {
            jake.y = jake.y + 5;
            //Cargar Animación Jake hacia abajo
        }
        //Movimientos del fantasma
        ghost.bounceOff(edges);
        ghost.velocityX = -5;
        ghost.velocityY = 3; 
  

 

    }
    // Agregar el código para Cambio de estado a END
    drawSprites();
}