const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const form = document.getElementById("form");
const nameErrorMessage = document.getElementById("name-error");
const passwordErrorMessage = document.getElementById("password-error");

const alphabetic = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const spacialCharacters = "!@#$%^&*()_+-={}[]:;'\"<>?/ ";

const acceptableColor = "rgb(64, 130, 64)";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputPasswordArray = inputPassword.value.toLowerCase().split("");

  if (inputName.value.trim() === "" || inputName.value.trim() === null) {
    nameErrorMessage.innerHTML = "Name is required";
  } else if (inputName.value.trim().length <= 1) {
    nameErrorMessage.innerHTML = "Name is too short";
  } else {
    nameErrorMessage.style.color = acceptableColor;
    nameErrorMessage.innerHTML = "Name is acceptable";
  }

  if (
    inputPassword.value.trim() === "" ||
    inputPassword.value.trim() === null
  ) {
    passwordErrorMessage.innerHTML = "Password is required";
  } else if (inputPassword.value.length < 8) {
    passwordErrorMessage.innerHTML = "Password is too short";
  } else {
    if (!inputPasswordArray.some((character) => numbers.includes(character))) {
      passwordErrorMessage.innerHTML =
        "Password is week it should contain numerical";
    } else if (
      !inputPasswordArray.some((character) => alphabetic.includes(character))
    ) {
      passwordErrorMessage.innerHTML =
        "Password is week it should contain alphabetic";
    } else if (
      !inputPasswordArray.some((character) =>
        spacialCharacters.includes(character)
      )
    ) {
      passwordErrorMessage.innerHTML =
        "Password is week it should contain spacial Character";
    } else {
      passwordErrorMessage.style.color = acceptableColor;
      passwordErrorMessage.innerHTML = "Password is acceptable";
    }
  }
});
