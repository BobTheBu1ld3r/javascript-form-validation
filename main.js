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
  if (password.validity.valid) {
    password.classList.remove("");
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

  if (!password.length > 12) {
    passwordValidity.tooShort = false;
  } else {
    passwordValidity.tooShort = true;
  }

  if (!password.includes("abcdefghijklmnopqrstuvwxyz")) {
    passwordValidity.missingLowercase = false;
  } else {
    passwordValidity.missingLowercase = true;
  }

  if (!password.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ")) {
    passwordValidity.missingUppercase = false;
  } else {
    passwordValidity.missingUppercase = true;
  }

  if (!password.includes("1234567890")) {
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
}
