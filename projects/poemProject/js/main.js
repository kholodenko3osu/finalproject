// Passcode Protection - pass: nevermore
function protectpasscode1() {
    const result = document.getElementById("pass1").value;
    let passcode = "nevermore";
    let space = '';
    if (result == space) {
       alert("Type passcode")
    } else {
       if (result == passcode) {
          window.location.replace("ravenTwo.html");
       } else {
          alert("Incorrect Passcode");
          location.reload();
       }
    }
 }

// plays fire audio and adds gradient
 function stokeFire(url) {
   new Audio(url).play();
   document.getElementById("fireless").className += " fireOne";
   setTimeout(removeFlame, 55500)
 };

//  plays general audio
 function playAudio(url) {
   new Audio(url).play();
 }

// Removes fire gradient
function removeFlame() {
   var element = document.getElementById("fireless");
  element.classList.remove("fireOne");

}

function chopwood() {
   var theDiv = document.getElementById("firewood");
var content = document.createTextNode("chop... ");
theDiv.appendChild(content);
}

function gotoravenOne() {
   window.location.href = "ravenOne.html";
}

function choprepeat(){
   playAudio('../woodchop.mp3');
   setTimeout(chopwood, 700);
   setTimeout(chopwood, 1800);
   setTimeout(chopwood, 3000);
   setTimeout(chopwood, 4100);
   setTimeout(chopwood, 5100);
   setTimeout(chopwood, 6100);
   setTimeout(chopwood, 6900);
   setTimeout(gotoravenOne, 8000);

}

