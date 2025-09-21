// ====================================
// 🎉 PART 1: EVENT HANDLING
// ====================================
const showMessageBtn = document.getElementById("showMessageBtn");
const message = document.getElementById("message");

// Toggle message visibility when button is clicked
showMessageBtn.addEventListener("click", () => {
  message.classList.toggle("hidden");
});

// ====================================
// 🎮 PART 2: INTERACTIVE FEATURES
// ====================================

// 🌙 Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🔢 Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
  if (counter > 0) counter--;
  counterValue.textContent = counter;
});

// ====================================
// 📋✅ PART 3: FORM VALIDATION
// ====================================

const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Validation Functions
function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

// ✅ Real-time validation (on typing)
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// ✅ Final form submission check
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const validName = validateName();
  const validEmail = validateEmail();
  const validPassword = validatePassword();

  if (validName && validEmail && validPassword) {
    formSuccess.classList.remove("hidden");
    signupForm.reset();
  } else {
    formSuccess.classList.add("hidden");
  }
});
