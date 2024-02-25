const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const username = document.getElementById('Username');
const password = document.getElementById('Password');
const dialogue = document.getElementById('process');

function login() {
  if (username.value === "") {
    dialogue.innerHTML = 'Username is required.';
  } else if (password.value === "") {
    dialogue.innerHTML = 'Password is required.';
  } else {
    dialogue.innerHTML = 'Login Success.';
    dialogue.classList.add('success');
  }
  return false;
}


const rs_username = document.getElementById('rs-username');
const rs_email = document.getElementById('rs-email');
const rs_password = document.getElementById('rs-password');
const rs_dialogue = document.getElementById('rs-dialogue');



function signup() {
  console.log('hello');
  if (rs_username.value === "") {
    rs_dialogue.innerHTML = 'Username is required.';
  } else if (rs_email.value === "") {
    rs_dialogue.innerHTML = 'Email is required.';
  } else if (rs_password.value === "") {
    rs_dialogue.innerHTML = 'Password is required.';
  } else {
    rs_dialogue.innerHTML = `Account Created.`;
    rs_dialogue.classList.add(`success`);
    
  }
  return false;
}
