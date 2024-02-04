// make noButton run away from the cursor
var noButton = document.getElementById("noButton");
noButton.onmousemove = function () {
  noButton.style.left = Math.random() * window.innerWidth + "px";
  noButton.style.top = Math.random() * window.innerHeight + "px";
};

// make yesButton redirect to a secret page
var yesButton = document.getElementById("yesButton");
yesButton.onclick = function () {
  window.location.href = "secret.html";
};
