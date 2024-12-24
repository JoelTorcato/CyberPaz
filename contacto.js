
document.addEventListener("DOMContentLoaded", () => { // Runs script after webpage content fully loads
    const inputs = document.querySelectorAll("input, textarea");
  
    inputs.forEach((input) => { // Loops through each input or textarea field (Arrays and collections)
      input.addEventListener("input", () => { // Function
        if (input.checkValidity() && input.value.trim() !== "") {
          input.style.backgroundColor = "#DFF2BF";
        } else {
          input.style.backgroundColor = "#";
        }
      });
    });
  });
  