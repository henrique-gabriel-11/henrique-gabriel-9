//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da boliha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha ();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {}
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }

function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(kevIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(kevIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

   rect(x,y, raqueteLargura, raqueteAltura);


function movimentaMinhaRaquete() {
  if(kevIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(kevIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}


function verificaColisaoRaquete(x, y) { 
  colidiu = collideRectCircle(x, y,  raqueteComprimento,raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
      velocidadeXBolinha *= -1;  
  }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}
