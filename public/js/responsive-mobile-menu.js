const targetDiv = document.getElementById("menu");
const btn = document.getElementById("burguer");
btn.onclick = function () {
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
  } else if (targetDiv.style.display === "block"){
    targetDiv.style.display = "none";
  }
  else {
    targetDiv.style.display = "block";
  }
}