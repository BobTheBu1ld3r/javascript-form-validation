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
  if (passwordConfirm.value == password.value) {
    passwordConfirm.classList.add("valid");
    passwordConfirm.classList.remove("error");
  } else {
    passwordConfirm.classList.remove("valid");
    passwordConfirm.classList.add("error");
    passwordConfirm.nextElementSibling.nextElementSibling.textContent =
      "Passwords don't match";
  }

  const passwordValidity = checkPasswordValidity(password.value);
  if (passwordValidity.valid) {
    password.classList.remove("error");
    password.classList.add("valid");
  } else {
    password.nextElementSibling.nextElementSibling.textContent =
      "Does not match requirements";
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
    document.querySelector(".char-constraint").classList.remove("valid");
  } else {
    passwordValidity.tooShort = false;
    document.querySelector(".char-constraint").classList.add("valid");
  }

  if (
    password
      .split("")
      .some((char) => "abcdefghijklmnopqrstuvwxyz".includes(char))
  ) {
    passwordValidity.missingLowercase = false;
    document.querySelector(".lowercase-constraint").classList.add("valid");
  } else {
    passwordValidity.missingLowercase = true;
    document.querySelector(".lowercase-constraint").classList.remove("valid");
  }

  if (
    password
      .split("")
      .some((char) => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char))
  ) {
    passwordValidity.missingUppercase = false;
    document.querySelector(".uppercase-constraint").classList.add("valid");
  } else {
    passwordValidity.missingUppercase = true;
    document.querySelector(".uppercase-constraint").classList.remove("valid");
  }

  if (password.split("").some((char) => "0123456789".includes(char))) {
    passwordValidity.missingNumber = false;
    document.querySelector(".number-constraint").classList.add("valid");
  } else {
    passwordValidity.missingNumber = true;
    document.querySelector(".number-constraint").classList.remove("valid");
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

passwordConfirm.addEventListener("input", (event) => {
  if (passwordConfirm.value == password.value) {
    passwordConfirm.classList.add("valid");
    passwordConfirm.classList.remove("error");
  } else {
    passwordConfirm.classList.remove("valid");
    passwordConfirm.classList.add("error");
    passwordConfirm.nextElementSibling.nextElementSibling.textContent =
      "Passwords don't match";
  }
});
