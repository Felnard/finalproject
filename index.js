var test = localStorage.getItem("lastname");
document.getElementById("name").innerHTML = test;
if (test == "undefined" || test == null) {
  var user = prompt("What's your name");
  localStorage.setItem("lastname", user);
  document.getElementById("name").innerHTML = localStorage.getItem("lastname");
}
