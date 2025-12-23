// 1- Button that changes text when clicked
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
  button.textContent = "You clicked me!";
});

// 2- Box that changes color on mouse over
let box = document.getElementById("colorBox");

// Change color on mouse over
box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "lightgreen";
});

// Change color back on mouse out
box.addEventListener("mouseout", function() {
  box.style.backgroundColor = "lightblue";
});
