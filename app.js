const contactsBtn = document.querySelector("#contactsBtn");
const trushBtn = document.querySelector("#trushBtn");
const contactContainer = document.querySelector(".contactContainer");
const trashContent = document.querySelector(".trashContent");
const currentContacts = document.querySelector(".currentContacts");
const addContactForm = document.querySelector(".addContactForm");
const cancelBtn = document.querySelector("#cancelBtn");
const createBtn = document.querySelector("#createBtn");
const overlay = document.querySelector(".overlay");
const contactSubmissionForm = document.querySelector(".contactSubmissionForm");
const nameText = document.querySelector("#name");
const emailText = document.querySelector("#email");
const numberText = document.querySelector("#number");
const details=document.querySelector(".details")
const detailsBtn=document.querySelectorAll("#detailsBtn")
const userDetailcontainer=document.querySelector(".userDetailcontainer")
const woow=document.querySelector(".woow")
console.log(details,detailsBtn,userDetailcontainer);

// console.log();
// const users=[]
const savedUsers = JSON.parse(localStorage.getItem("users"));
console.log(savedUsers);
const users = savedUsers || [];
console.log(users);
renderUsers();
contactsBtn.style.borderBottom = "1px solid red";
trushBtn.addEventListener("click", function () {
  trashContent.style.display = "block";
  currentContacts.style.display = "none";
  trushBtn.style.borderBottom = "1px solid red";
  contactsBtn.style.borderBottom = "none";
});
contactsBtn.addEventListener("click", function () {
  trashContent.style.display = "none";
  currentContacts.style.display = "block";
  contactsBtn.style.borderBottom = "1px solid red";
  trushBtn.style.borderBottom = "none";
});
createBtn.addEventListener("click", function () {
  console.log("button clicked");
  addContactForm.classList.add("addContactForm");
  addContactForm.classList.remove("addContactFormActive");
  overlay.style.display = "block";
});
cancelBtn.addEventListener("click", function () {
  console.log("button clicked");
  addContactForm.classList.remove("addContactForm");
  overlay.style.display = "none";
  addContactForm.classList.add("addContactFormActive");
});
contactSubmissionForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameText.value;
  const email = emailText.value;
  const number = numberText.value;
  const user = {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
    number,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  //   console.log(JSON.stringify(users));
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
  renderUsers()
});
function renderUsers() {
  contactContainer.innerHTML = "";
  users.forEach((user) => {
    console.log(user);
    const userHtml = `<div class="contactCalling">
 <h3>${user.name}</h3>
 <a  class="hidenData"  href="#"><h3>${user.email}</h3></a>
 <a  class="hidenData"  href="#"> <h3>${user.number}</h3></a>
 <div class="moreDetails">
    <button onclick='viewUser(${user.id})' id="detailsBtn" class="features"> <i class='bx bxs-user-detail features'></i></button>
    <button class="deleteBtn features"> <i class='bx bx-trash features'></i></button>
 </div>
 </div>`;
    contactContainer.insertAdjacentHTML("beforeend", userHtml);
  });
}
// localStorage.removeItem("users")
function viewUser(id) {
  const user = users.find((user) => user.id == id);
  console.log(user);
  userDetailcontainer.classList.add("userDetailcontainer")
  userDetailcontainer.classList.remove("userDetailcontainerActive")
  const dateArr = user.createdAt.split("T");
  console.log(dateArr);
  userDetailcontainer.innerHTML=` <div class="details detailsActive">
  <div class="headerSect">
      <h3>Contact Details</h3>
      <i class='bx bx-user'></i>
  </div>
  <div class="detailsForm">
      <div class="name">
          <h3>Name:</h3>
          <h3>${user.name}</h3>
          </div>
      <div class="name">
          <h3>Email:</h3>
          <h3>${user.email}</h3>
          </div>
      <div class="name">
          <h3>Id:</h3>
          <h3>${user.id}</h3>
          </div>
          <div class="name">
              <h3>Contact:</h3>
              <h3>${user.number}</h3>
              </div>
      <div class="name">
          <h3>Created At:</h3>
          <h3>${dateArr[0]}</h3>
          </div>
       <div class="back">
      <button onclick='exitDetails()' id="backBtn">Back</button>
  </div>
      </div>
</div>`

}
function exitDetails(){
  userDetailcontainer.classList.remove("userDetailcontainer")
  userDetailcontainer.classList.add("userDetailcontainerActive") 
}











