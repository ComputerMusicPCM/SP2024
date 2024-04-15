let synths = [];

function setup(){
  for(let i =0; i < 5; i++){synths[i] = new Osc(0.5)}

}

function draw(){
  for(let i =0; i < 5; i++){
  synths[i].modulate();
}
}

class Osc {
  constructor(freq){
    this.freq = freq;
    this.osc1 = new p5.Oscillator('sine');
    this.osc1.start();
    this.osc1.freq(random(200,1000));
    this.mod1 = new p5.Oscillator('sine');
    this.mod1.start();
    this.mod1.amp(100);
    this.mod1.freq(this.freq);
    this.mod1.disconnect();
    this.osc1.amp(this.mod1);
  }
  modulate(){
    this.mod1.amp(map(mouseX,0,400,10,500))
    this.mod1.freq(map(mouseY,0,400,0.5,15))
  }
}