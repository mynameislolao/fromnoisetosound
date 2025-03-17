let osc;

var myCanvas;
var vcoButton;
var vcoButtonX = 100;
var vcoButtonY;
var buttonWidth = 100;

var filterX = 230;
var filterY;

var amplifierX=230+130;
var ampliferY;
var manualX=60
var manualY=20

var sourcesX = amplifierX +150
var sourcesY = vcoButtonY

var indX = amplifierX+ 270
var indY = vcoButtonY

var manualText= "The synthesizer demonstrates the success of a visual language, the development to making it, and the impact of its universality to draw people together to create art. The machinery starts with a process called subtractive synthesis, which in its simplest form draws on three parts to allow sound to move through and out. It begins with 1. a Voltage Controlled Oscillator, commonly abbreviated VCO, where sound is generated. The raw tone is then taken to  2. The filter, which removes part of the sound to change the timbre. This now reduced element runs through 3. An amplifier, which shapes the volume of the sound that is played, what we hear. This three step structure offered a framework to organize my thinking on my Unit 6 briefs. An instrument as of a system of pictograms, it proves itself not only a tangible product of, but further as an analogy. The messy web of the creative process can be contained, understood and visualized through a synthesizer itself. It serves as 1. The input as the starting source to my visual and contextual research 2. A framework of thinking, an example of visual language as translation 3. The output in my use of audio through physical computing techniques."
var vcoText = "The VCO is the first input to generate any sort of sound on a synthesizer. The Korg Monologue itself acted as this first input to start my thinking for my Unit 6 projects. It served as an example of a box and a legacy media.I equally find it a starting point as the beginning of making my own music. It allowed me to shift all the listening I was doing to making. I was able to create rather than copy. My place was very much within the listener, rather than a maker, lacking the technical skills on either of the instruments I played before - trumpet and electric guitar. I wasn’t forming ideas through sound, but rather emulating sound for the sake of making noise.The Korg Monologue allowed me to finally string ideas of noise into sound. The new technicality, in turn, was no longer physical but in comprehension. It becomes understanding the host of symbols that is presented on the interface. o play the synthesizer is to read it, to understand what each button means, how it interacts with the next, and what sound it will produce. It’s an experiment in distilling and communicating the messy, intangible matter of noise. In his journal, A Year of Swollen Appendices, Brian Eno describes noise as “a signal sent through a medium interacts with it in complex ways … Noise is unreadable, inscrutable… It is the absence of coherence.” (1996, p.195) We are saturated and encompassed in noise, often we cannot choose where we receive it from or even how we form it ourselves. Noise is unpredictable. The erratic nature of noise of audio draws the connection to noise of information. A similarly intangible matter, we are in a culture overwhelmed by forms of information - of signals, words, data. We are constantly sending and receiving information in the circularity by which we send and receive audio. The noise of information, rather than audio, is what is absorbed, understood, and simplified in the style and design choices of the visual languages around us. The design of a badge, the center of my Experience and Environments project, carefully selects the most important elements of a message, musician, movement to be communicated within a hand-held circle. The visual and typographic choices within it is what prescribes its meaning. A musician uses a synthesizer to refine audio to sound, a designer uses visual language to transform information to meaning." 
var filterText= "The designer is involved in the transformation of noise to sound most obviously through the system of notation.The information of noise is given meaning by the invention of note. The system to visually place music is a system of lines and circles, of pictograms.When we place this transformation within a synthesizer, we locate this in the filter - where the pure tone of the VCO is reduced through cut off frequency, resonance, and slope in order to shape character.Understanding how to operate, or in a way read, the synthesizer expands classical notation by offering an array of options to modulate the tone itself.The sequence of an interface visualizes the steps by which unplanned audio becomes chosen, generated sound forms. The design in synthesizers confronts us with a question of translation.What does the process of noise to sound look like? How can something that we cannot see be made into something we can adjust and temper with our own hands? The synthesizer depends on a system of pictograms that is produced through successful translation. I was introduced to the role translation in graphic design from a brief in Unit 4 of Information and Systems centered around it. During this briefing, I recall seeing The Mathematical Theory of Communication, created by Claude E. Shannon in 1949, which runs eerily parallel to the process of subtractive synthesis. The information is seeking to reach a destination without interference, yet requires a channel to do so. The graphic product of studying and analyzing a complex idea, when we apply pictograms of the synthesizer to this diagram, we can imagine the following 1. the transmitter is the designer 2. the channel as translation 3. the noise as expression The goal is to find an avenue by which to simplify yet maintain a recognizable essence. The range of pictograms extends from the physically massive - flags to the digitally tiny - emojis. They follow us throughout our day, they are the stop signs and traffic lights on the crosswalk, the signage systems in transportation and buildings. The International System of Typographic Picture Education, more simply abbreviated as Isotype, is a prime example of the success of translating an idea to a pictogram. Designed by Otto and Marie Neurath, it sought to produce a clear visual language that could be utilized in children’s education. "
var amplifierText= "While the design of Isotope requires criticism, I am interested in its method of making something recognizable. Otto Neurath emphasizes how “it is not … how to transfer in the most direct and simple way…but how to satisfy the possible questions of a child, his love of action, his identifying himself with a person on the page.” (Jeffries, 2019) To keep it emotive and approachable - keeping it human. This interference in translating a pictogram takes the form of the expressive. To translate well is to retain the emotive, it “reflects both the character of the original and the spirit of the contemporary as well as the individuality of the translator” (Rock, 2013, p.54) The pictograms of synthesizers retain the sensation of sound. When we select between the triangle, square, or sawtooth soundwave, we amplify the feeling of the notes pitching upwards and downwards reflected back to us. The final process of sound, the volume of the sound that is carried on is determined by the amplifier, stretching the duration of notes through the effects of attack, delay, or sustain. The Oramics Machine designed by Daphne Oram in 1957 materializes the sensation of pictograms by using hand-drawn waveforms to program sound. I found the design of this machine, and accompanying text, An Individual Note of Music, Sound, and Electronics to be an ongoing source of inspiration to explore how organic movement can produce electronic sound. The set of symbols we recognize in synthesizers are not solely visual but interactive. Black to Techno, a documentary on Detroit Techno, describes this relationship as “the mimesis of movement morphing later into a technology of rhythm.” (Gucci, 2019) To operate this axis of sound, we don’t simply read these pictograms but use touch to activate them. I was introduced to this idea of axial thinking over the summer through reading the essay “Axis Thinking” within A Year With Swollen Appendices. I could start seeing axes in every corner of my day.Rather than being limited to a scale of notes in a single fashion, the synthesizer as a whole massively opened an axis of texture and character to each tone. Facing the maker on a sequential interface, the knobs, buttons, waveforms, and filters are the process of analyzing and simplifying noise into axises. An axis creates a network, rather a road, from one property to the next. It sets the floating form of audio down on a grid, plotting it to be moved through rather than faced with. "


var sourceText ="Abdullah, A. (2023) A Strange Celestial Road: My Time in the Sun Ra Arkestra. New York: Blank Forms Editions. Oram, D. (1972) An Individual Note of Music, Sound, and Electronics. London: Galliard LTD. Petridis, A. (2023) ‘Forty years of New Order’s Blue Monday: who inspired it and who it inspired’, The Guardian, 7 March. Available at: https://www.theguardian.com/music/2023/mar/07/forty-years-of-new-order-blue-monday-inspirations (Accessed 26 January 2025)Rock, M. (2013) Multiple Signatures: On Designers, Authors, Readers and Users. New York: Rizzoli. Rodgers, T. (2015) ‘Tinkering with Cultural Memory: Gender and the Politics of Synthesizer Historiography’, Feminist Media Histories, 1(4), pp.13. Sisters With Transistors (2020) Directed by Lisa Rovner [Feature film]. New York City: Metrograph Pictures. "
var indexText = "The image index can be found in the following link which includes the entirety of this PDF text: https://docs.google.com/document/d/1UuEwYu7-A2fdzMKmB5KtlbVEf2D6pJF-1NXg3VahpY4/edit?usp=sharing." 
function preload() {
  //  vcoButton = loadImage('content/Synth1.jpg');
    
  }
function setup(){   
    const container = document.getElementById("myP5Sketch");
    const canvasWidth = container.offsetWidth;
    const canvasHeight = container.offsetHeight;

    osc = new p5.Oscillator('sine');

    myCanvas = createCanvas(700, 200);
    console.log(myCanvas);
    myCanvas.parent("myP5Sketch");
    vcoButtonY = 100;
    rectMode(CENTER);
    background(255);
    // button1 = createButton(10, 20);
    // button1.mousePressed(changeBG);
    
}
function draw(){
  let c = map(mouseX, 0, width, 0, 360); 
  let b = map(mouseY, 0, height, 100, 0);
  let pitch = map(mouseX, 0, width, 200, 900);
  let volume = map(mouseY, 0, height, 1, 0);

  osc.freq(pitch);
  osc.amp(volume);

    // background(c);
    // Draw a circle
   // ellipse(200, 200, 50, 50);
    // image(vcoButton, vcoButtonX, vcoButtonY, vcoButtonWidth, vcoButtonWidth);

    push();
    noStroke();
    fill(c,100,b);
    rect(manualX,manualY,100,20);
    textFont('Helvetica');
    textSize(10);
    textAlign(CENTER,CENTER);
    fill(250);
    text("Manual", manualX, manualY);
    pop();

    push();
    noStroke();
    fill(c, 100, b);
    rect(vcoButtonX, vcoButtonY, buttonWidth, buttonWidth);
    fill(57,255,20);``
    ellipse(vcoButtonX-30,vcoButtonY,buttonWidth, buttonWidth);
    fill(c, 100, b);
    rect(vcoButtonX, vcoButtonY, buttonWidth, buttonWidth);
    textFont('Helvetica');
    textSize(10);
    textAlign(CENTER,CENTER);
    fill(250);
    text("VCO", vcoButtonX, vcoButtonY);
    pop();

    push();
    noStroke();
    fill(c, 100, b);``
    ellipse(filterX, vcoButtonY, buttonWidth, buttonWidth);
    textFont('Helvetica');
    textSize(10);
    textAlign(CENTER,CENTER);
    fill(250);
    text("Filter",filterX,vcoButtonY);
    textSize(8);
    //text("Analysis",filterX,vcoButtonY+20);
    pop();

    push();
    noStroke();
    fill(c, 100, b);``
    rect(amplifierX,vcoButtonY,buttonWidth, buttonWidth);
    fill(57,255,20);
    ellipse(amplifierX+30,vcoButtonY,buttonWidth, buttonWidth);
    fill(c, 100, b);``
    rect(amplifierX,vcoButtonY,buttonWidth, buttonWidth);
    textFont('Helvetica');
    textSize(10);
    textAlign(CENTER,CENTER);
    fill(250);
    text("Amplifier",amplifierX,vcoButtonY);
    pop();

    push();
    noStroke();
    fill(c, 100, b);``
    ellipse(amplifierX+150,vcoButtonY,buttonWidth, buttonWidth);
    textFont('Helvetica');
    textSize(10);
    textAlign(CENTER,CENTER);
    fill(250);
    text("Sources",amplifierX+150,vcoButtonY);
    pop();

    push();
    noStroke();
    fill(c, 100, b);``
    ellipse(amplifierX+150 + 120,vcoButtonY,buttonWidth, buttonWidth);
    textFont('Helvetica');
    textSize(10);
    textAlign(CENTER,CENTER);
    fill(250);
    text("Image Index",amplifierX+150 + 120,vcoButtonY);
    pop();


    push();
    noStroke();
    fill(c, 100, b);``
    textFont('Helvetica');
    textSize(10);
    textAlign(CENTER,CENTER);
    fill(250);
    text("Amplifier",amplifierX,vcoButtonY);
    pop();

    



    if(mouseX >10 && mouseX < (10+height/2)){
        print("mouse in image")
        document.getElementById("myP5Sketch").style.cursor = "n-resize";
    }
}

function mouseClicked() {

  if (mouseX > (manualX-buttonWidth/2) && mouseX < (manualX +buttonWidth/2) ) {
    // Code to run if the mouse is on the left. 
    console.log("is this working?")
    var dynamicText = document.getElementById("dynamicText");
    dynamicText.innerHTML = "<h2>Manual</h2>";
    console.log(dynamicText)
      dynamicText.innerHTML = dynamicText.innerHTML + manualText
      // dynamicText = dynamicText +  manualText;
      // dynamicText = dynamicText +  "</p>";
  }
    if (mouseX > (vcoButtonX-buttonWidth/2) && mouseX < (vcoButtonX +buttonWidth/2) ) {
      // Code to run if the mouse is on the left. 
      console.log("is this working?")
      var dynamicText = document.getElementById("dynamicText");
      dynamicText.innerHTML = "<h2>VCO</h2>";
      console.log(dynamicText)
        dynamicText.innerHTML = dynamicText.innerHTML + vcoText
        // dynamicText = dynamicText +  vcoText;
        // dynamicText = dynamicText +  "</p>";
    }else if (mouseX > (filterX-buttonWidth/2) && mouseX < (filterX +buttonWidth/2) ) {
        // Code to run if the mouse is on the left. 
        console.log("is this working?")
        var dynamicText = document.getElementById("dynamicText");
        dynamicText.innerHTML = "<h2>Filter</h2>";
        console.log(dynamicText)
          dynamicText.innerHTML = dynamicText.innerHTML + filterText
          // dynamicText = dynamicText +  vcoText;
          // dynamicText = dynamicText +  "</p>";
      }else if (mouseX > (amplifierX-buttonWidth/2) && mouseX < (amplifierX +buttonWidth/2) ) {
      // Code to run if the mouse is on the left. 
      console.log("is this working?")
      var dynamicText = document.getElementById("dynamicText");
      dynamicText.innerHTML = "<h2>Amplifier</h2>";
      console.log(dynamicText)
        dynamicText.innerHTML = dynamicText.innerHTML + amplifierText
        // dynamicText = dynamicText +  vcoText;
        // dynamicText = dynamicText +  "</p>";
      }else if (mouseX > (sourcesX-buttonWidth/2) && mouseX < (sourcesX +buttonWidth/2) ) {
        // Code to run if the mouse is on the left. 
        console.log("is this working?")
        var dynamicText = document.getElementById("dynamicText");
        dynamicText.innerHTML = "<h2>Sources</h2>";
        console.log(dynamicText)
          dynamicText.innerHTML = dynamicText.innerHTML + sourceText
          // dynamicText = dynamicText +  vcoText;
          // dynamicText = dynamicText +  "</p>";
        }else if (mouseX > (indX-buttonWidth/2) && mouseX < indX +buttonWidth/2) {
          // Code to run if the mouse is on the left. 
          console.log("is this working?")
          var dynamicText = document.getElementById("dynamicText");
          dynamicText.innerHTML = "<h2>Image Index</h2>";
          console.log(dynamicText)
            dynamicText.innerHTML = dynamicText.innerHTML + indexText
            // dynamicText = dynamicText +  vcoText;
            // dynamicText = dynamicText +  "</p>";
  
        
        
    }

function changeBG() {
    var val = random(255);
    background(val);
  }
}

function mousePressed() {
  osc.start();
}

function mouseReleased (){
  osc.stop();
}

function showModalone(){
  $(".modal").toggleClass("show")
}

$(".manual").click(showModalone)

