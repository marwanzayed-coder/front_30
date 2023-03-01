let form = document.getElementById("form");
form.addEventListener("submit", sendData);
function sendData(e) {
  e.preventDefault();
  let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (e.target[0].value.length == 0) {
    popup("Oops Can't Send Data", "You must write your name");
  } else if (e.target[1].value.length == 0) {
    popup("Oops Can't Send Data", "You must write your email");
  } else if (
    e.target[1].value.length > 0 &&
    !regExEmail.test(e.target[1].value)
  ) {
    popup("Oops Can't Send Data", "You Have Entered An Invalid Email Address!");
  } else if (e.target[2].value.length > 0) {
    let regExPhone = /^01[0125][0-9]{8}$/gm;
    if (!regExPhone.test(e.target[2].value)) {
      popup(
        "Oops Can't Send Data",
        "You Have Entered An Invalid Phone Number!"
      );
    }
  } else if (e.target[3].value.length == 0) {
    popup("Oops Can't Send Data", "You must write your Message");
  } else {
    let lenght = e.target.length - 1;
    for (let i = 0; i <= lenght; i++) {
      e.target[i].value = "";
    }
  }
}
let inputs = document.querySelectorAll(".form input");
let textarea = document.querySelector(".form textarea");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => changeLabel(e, input));
});

textarea.addEventListener("change", (e) => changeLabel(e, textarea));

function changeLabel(e, ele) {
  if (e.target.value.length == 0) ele.classList.remove("open");
  else ele.classList.add("open");
}
function popup(msg, paragraph) {
  let popup = document.createElement("div");
  popup.className = "popup";
  document.getElementById("popupContainer").prepend(popup);

  let heading = document.createElement("h2");
  heading.innerHTML = msg;
  popup.append(heading);

  let para = document.createElement("p");
  para.innerHTML = paragraph;
  popup.append(para);

  let button = document.createElement("button");
  button.innerHTML = "Close";
  popup.append(button);
  button.addEventListener("click", () => popup.remove());
}
