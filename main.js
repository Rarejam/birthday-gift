const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const dialog1 = document.querySelector("#form1-dialog");
const form1 = document.querySelector("#form1");
const dialog2 = document.querySelector("#form2-dialog");
const form2 = document.querySelector("#form2");
const dialog3 = document.querySelector("#form3-dialog");
const form3 = document.querySelector("#form3");
const closeDialog1 = document.querySelector(".span1");
const closeDialog2 = document.querySelector(".span2");
const closeDialog3 = document.querySelector(".span3");
const dialogs = document.querySelector("dialog");
const correctPassword1 = "salman24";
const correctPassword2 = "sulaiman24";
const correctPassword3 = "mother24";
const container = document.querySelector(".content");
const salman = document.querySelector(".salman");
const mother = document.querySelector(".mother");
const sulaiman = document.querySelector(".sulaiman");
const closeLetter1 = document.querySelector(".close-letter1");
const closeLetter2 = document.querySelector(".close-letter1");
const closeLetter3 = document.querySelector(".close-letter3");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
// const password1 = document.querySelector("input").value;
closeDialog1.addEventListener("click", () => {
  //   dialogs.forEach((dialog) => {
  //     dialog.close();
  //   });
  dialog1.close();
});
closeDialog2.addEventListener("click", () => {
  dialog2.close();
});
closeDialog3.addEventListener("click", () => {
  dialog3.close();
});
const submitDialog1 = document.querySelector(".submit-dialog1");
button1.addEventListener("click", (e) => {
  e.preventDefault();
  dialog1.showModal();
});
submitDialog1.addEventListener("click", (e) => {
  e.preventDefault();
  const password1 = form1.value;
  if (password1 == correctPassword1) {
    console.log(password1);
    // window.location.href = '';
    form1.value = "";
    container.style.display = "none";
    salman.style.display = "block";
    salman.style.display = "flex";
    header.classList.remove("header");
    header.classList.add("head1");
  } else {
    alert("wrong password");
    form1.value = "";
    console.log("wrong password");
  }
  dialog1.close();
});
const submitDialog2 = document.querySelector(".submit-dialog2");
button2.addEventListener("click", (e) => {
  e.preventDefault();
  dialog2.showModal();
});
submitDialog2.addEventListener("click", (e) => {
  e.preventDefault();
  const password2 = form2.value;
  if (password2 == correctPassword2) {
    console.log(password2);
    form2.value = "";
    container.style.display = "none";
    sulaiman.style.display = "block";
    sulaiman.style.display = "flex";
    header.classList.remove("header");
    header.classList.add("head2");
    footer.style.backgroundColor = "black";
    footer.style.color = "wheat";
  } else {
    alert("wrong password");
    form2.value = "";
    console.log("wrong password");
  }
  dialog2.close();
});
const submitDialog3 = document.querySelector(".submit-dialog3");
button3.addEventListener("click", (e) => {
  e.preventDefault();
  dialog3.showModal();
});
submitDialog3.addEventListener("click", (e) => {
  e.preventDefault();
  const password3 = form3.value;
  if (password3 == correctPassword3) {
    console.log("password3");
    form3.value = "";
    container.style.display = "none";
    mother.style.display = "block";
    mother.style.display = "flex";
    header.classList.remove("header");
    header.classList.add("head2");
    footer.style.backgroundColor = "black";
    footer.style.color = "wheat";
  } else {
    alert("wrong password");
    form3.value = "";
    console.log("wrong password");
  }
  dialog3.close();
});
closeLetter1.addEventListener("click", (e) => {
  e.preventDefault();
  container.style.display = "flex";
  salman.style.display = "none";
  // salman.style.display = "flex";
});
closeLetter2.addEventListener("click", (e) => {
  e.preventDefault();
  container.style.display = "flex";
  sulaiman.style.display = "none";
  // sulaiman.style.display = "flex";
});
closeLetter3.addEventListener("click", (e) => {
  e.preventDefault();
  container.style.display = "flex";
  mother.style.display = "none";
  // mother.style.display = "flex";
});
