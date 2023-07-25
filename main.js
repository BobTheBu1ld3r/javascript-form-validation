const firstName = document.querySelector("#first-name");
const middleName = document.querySelector("#middle-name");
const lastName = document.querySelector("#last-name");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");

firstName.addEventListener("input", (event) => {
  if (firstName.validity.valid) {
    firstName.classList.remove("error");
    firstName.classList.add("valid");
  } else {
    firstName.classList.remove("valid");
    firstName.classList.add("error");
    if (firstName.validity.valueMissing) {
      firstName.nextElementSibling.nextElementSibling.textContent =
        "First Name field required";
    } else if (firstName.validity.tooShort) {
      firstName.nextElementSibling.nextElementSibling.textContent =
        "Needs to be more than 2 characters long";
    }
  }
});

middleName.addEventListener("input", (event) => {
  if (middleName.validity.valid) {
    middleName.classList.remove("error");
    middleName.classList.add("valid");
  } else {
    middleName.classList.remove("valid");
    middleName.classList.add("error");
    if (middleName.validity.tooShort) {
      middleName.nextElementSibling.nextElementSibling.textContent =
        "Needs to be more than 2 characters long";
    }
  }
});

lastName.addEventListener("input", (event) => {
  if (lastName.validity.valid) {
    lastName.classList.remove("error");
    lastName.classList.add("valid");
  } else {
    lastName.classList.remove("valid");
    lastName.classList.add("error");
    if (lastName.validity.valueMissing) {
      lastName.nextElementSibling.nextElementSibling.textContent =
        "Last Name field required";
    } else if (lastName.validity.tooShort) {
      lastName.nextElementSibling.nextElementSibling.textContent =
        "Needs to be more than 2 characters long";
    }
  }
});

password.addEventListener("input", (event) => {
  console.log(password.value);
  const passwordValidity = checkPasswordValidity(password.value);
  if (passwordValidity.valid) {
    password.classList.remove("error");
    password.classList.add("valid");
  } else {
    console.log(passwordValidity);
    password.classList.remove("valid");
    password.classList.add("error");
  }
});

function checkPasswordValidity(password) {
  const passwordValidity = {
    valid: null,
    tooShort: null,
    missingLowercase: null,
    missingUppercase: null,
    missingNumber: null,
  };

  if (password.length < 12) {
    passwordValidity.tooShort = true;
  } else {
    passwordValidity.tooShort = false;
  }

  if (
    password
      .split("")
      .some((char) => "abcdefghijklmnopqrstuvwxyz".includes(char))
  ) {
    passwordValidity.missingLowercase = false;
  } else {
    passwordValidity.missingLowercase = true;
  }

  if (
    password
      .split("")
      .some((char) => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char))
  ) {
    passwordValidity.missingUppercase = false;
  } else {
    passwordValidity.missingUppercase = true;
  }

  if (password.split("").some((char) => "0123456789".includes(char))) {
    passwordValidity.missingNumber = false;
  } else {
    passwordValidity.missingNumber = true;
  }

  if (
    passwordValidity.tooShort ||
    passwordValidity.missingLowercase ||
    passwordValidity.missingUppercase ||
    passwordValidity.missingNumber
  ) {
    passwordValidity.valid = false;
  } else {
    passwordValidity.valid = true;
  }

  return passwordValidity;
}
