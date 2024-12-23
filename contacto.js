
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input, textarea");
  
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.checkValidity() && input.value.trim() !== "") {
          input.style.backgroundColor = "#DFF2BF";
        } else {
          input.style.backgroundColor = "";
        }
      });
    });
  });
  