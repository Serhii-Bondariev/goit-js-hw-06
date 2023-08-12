const input = document.querySelector(`#validation-input`);

input.addEventListener("blur", () => {
  const validlength = parseInt(input.getAttribute("data-length"));
  const inputValue = input.value.trim();

  if (inputValue.length === validlength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
