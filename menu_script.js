function openMenu() {
  document.getElementById("overlay1").style.display = "block";
  document.getElementById("Menu").style.marginLeft = "0px";
  document.getElementById("Menu").style.borderRight = "rgba(255, 255, 255, 0.25) 1px solid";
  document.getElementById("Menu").style.overflowY = "visible"
  document.getElementById("main").style.marginLeft = "60px";
  document.getElementById("main").style.marginRight = "-60px";
}

function closeMenu() {
  document.getElementById("overlay1").style.display = "none";
  document.getElementById("Menu").style.marginLeft = "-300px";
  document.getElementById("Menu").style.borderRight = "rgba(255, 255, 255, 0.25) 0px solid";
  document.getElementById("Menu").style.overflowY = "hidden"
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("main").style.marginRight = "0px";
}

