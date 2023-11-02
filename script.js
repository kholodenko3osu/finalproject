let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");

//Detect touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent(it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);



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
      window.location.replace("ravenTwo.html");
   } else if (result == passabsolution) {
    window.location.replace("ravenTwo.html");
 }   else if (result == passozymandias) {
  window.location.replace("https://www.poetryfoundation.org/poems/46565/ozymandias", "_blank");
}  else {
        alert("I cannot. Try lowecase.");
        location.reload();
     }
  }
}

