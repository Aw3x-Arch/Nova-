const signInBtn = document.getElementById("SignIn");
const signUpBtn = document.getElementById("SignUp");

const signInBox = document.getElementById("SignInBox");
const signUpBox = document.getElementById("SignUpBox");

signInBtn.onclick = () => {
  signInBtn.classList.add("active");
  signUpBtn.classList.remove("active");
  signInBox.style.display = "block";
  signUpBox.style.display = "none";
};

signUpBtn.onclick = () => {
  signUpBtn.classList.add("active");
  signInBtn.classList.remove("active");
  signUpBox.style.display = "block";
  signInBox.style.display = "none";
};
document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.getElementById("Create");
  const notify = document.getElementById("Notify");

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();
    notify.classList.add("show");

    setTimeout(() => {
      notify.classList.remove("show");
    }, 3000);
  });
});
