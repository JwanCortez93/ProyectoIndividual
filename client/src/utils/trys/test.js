// Add event listener to open the form when the button is clicked
document.getElementById("openForm").addEventListener("click", function () {
  document.getElementById("formContainer").classList.add("show");
});

// Submit form functionality
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission for demo purposes
  console.log("Form submitted");
  // You can add additional code here to handle form submission
  // For example, sending data to a server or displaying a success message
});
