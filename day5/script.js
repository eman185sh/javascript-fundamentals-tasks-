// Get elements
let input = document.getElementById("textInput");
let saveBtn = document.getElementById("saveBtn");
let deleteBtn = document.getElementById("deleteBtn");

// Load saved data when page opens
input.value = localStorage.getItem("myText") || "";

// Save text to LocalStorage & SessionStorage
saveBtn.addEventListener("click", function () {
  let text = input.value;

  localStorage.setItem("myText", text);
  sessionStorage.setItem("myText", text);

  alert("Text saved successfully!");
});

// Delete text from input & storage
deleteBtn.addEventListener("click", function () {
  input.value = "";

  localStorage.removeItem("myText");
  sessionStorage.removeItem("myText");

  alert("Text deleted successfully!");
});
