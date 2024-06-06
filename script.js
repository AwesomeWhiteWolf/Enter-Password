const h1 = document.querySelector("h1");
const answer = document.querySelector("input");
const img = document.querySelector("img");
let step = 0;
answer.addEventListener("click", () => {
    if (answer.value.toLowerCase() == "password" && step == 0) {
      h1.textContent = "Password is incorrect";
      h1.style.color = "red";
      nextStep();
    }
    else if (answer.value.toLowerCase() == "incorrect" && step == 1) {
      h1.textContent = "Try again";
      nextStep();
    }
    else if (answer.value.toLowerCase() == "again" && step == 2) {
      h1.textContent = "Please try again later";
      nextStep();
    }
    else if (answer.value.toLowerCase() == "again later" && step == 3) {
      img.classList.remove("hide");
      nextStep()
      window.scrollTo(0, 1200);
    }
    else if (answer.value != "") {
      alert("You don't understand right?");
    }

});

function nextStep() {
  answer.value = "";
  step++;
}

