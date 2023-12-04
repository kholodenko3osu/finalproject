document.querySelector(".addLinks").addEventListener("keyup", event => {
  if(event.key !== "Enter") return; // Use `.key` instead.
  document.querySelector(".linkadd").click(); // Things you want to do.
  event.preventDefault(); // No need to `return false;`.
});


// Passcode Protection - passwords: projects, weekly, baubles, absolution. Stop sneaking around here!
function protectpasscode() {
  const result = document.getElementById("password").value;
  let passprojects = "projects";
  let passweekly = "weekly";
  let passbaubles = "baubles";
  let passabsolution = "absolution";
  let passozymandias = "ozymandias";
  let space = '';
  if (result == space) {
     alert("Type what you can find.")
  } 
  else {
     if (result == passprojects) {
        window.location.replace("MainProjects.html");
     } else if (result == passweekly) {
        window.location.replace("MainWeekly.html");
     } else if (result == passbaubles) {
      window.location.replace("MainBaubles.html");
   } else if (result == passabsolution) {
    window.location.replace("MainAbsolution.html");
 }   else if (result == passozymandias) {
  window.location.replace("https://www.poetryfoundation.org/poems/46565/ozymandias", "_blank");
}  else {
        alert("I cannot. Try lowercase.");
        location.reload();
     }
  }
}

function bloodNarrator() {
  var audio = new Audio('bloodnarration.mp3');
  audio.play();
  setTimeout(home, 6000);
}

function home() {
  window.location.replace("index.html")

}

/////////////////////////////////////////

var canvas;
var mySound;
var mouseVal = false;
var hover = false;

function preload() {
  // Load your audio file
  mySound = loadSound('flashlight.mp3');
}

function setup() {
  canvas = createCanvas (windowWidth, windowHeight+300, WEBGL);
  canvas.position(0,200);
}


function draw() {
  background(0);
  let locX = mouseX - width / 2;
  let locY = (mouseY) - height / 2;

  if (mouseVal == true) {
    erase();
    circle(locX, locY, 250);
    noErase();
    fill(255,255,255,5);
    circle(locX, locY, 250);
    fill(255,255,255,10);
    circle(locX, locY, 100);
  } 

  canvas.mouseOver(flashlight);
  canvas.mouseOut(flashlight);
  noStroke();
   
}

// Only activates mouseClicked() function if mouse is over canvas element
function flashlight() { 
  if (mouseY > 0) {
    hover = false;
  } else {
    hover = true;
  }
}

function mouseClicked() {
  if (hover == true) {
  if (mouseVal == true) {
    mouseVal = false;
} else {
  mouseVal = true;
}
print(mouseVal); 

mySound.play();
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
