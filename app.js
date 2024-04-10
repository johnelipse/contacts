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
const details = document.querySelector(".details");
const detailsBtn = document.querySelectorAll("#detailsBtn");
const userDetailcontainer = document.querySelector(".userDetailcontainer");
const woow = document.querySelector(".woow");
const alertText = document.querySelector(".alert");
const contactContainers = document.querySelector(".contactContainers");
const deleteBtn = document.querySelector("#deleteBtn");
console.log(
  details,
  detailsBtn,
  userDetailcontainer,
  alertText,
  contactContainers
);

const savedUsers = JSON.parse(localStorage.getItem("users"));
const trashSavedUsers = JSON.parse(localStorage.getItem("trashUsers"));
const users = savedUsers || [];
// console.log(users);
renderUsers(users);
const trashUsers = trashSavedUsers || [];
// console.log(trashUsers);

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
  let user = {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
    number,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.reload();
  // renderUsers();
});

function renderUsers(users) {
  console.log(users);
  contactContainer.innerHTML = "";
  users.forEach((user) => {
    console.log(user);
    const userHtml = `<div class="contactCalling">
     <h3>${user?.name}</h3>
     <a  class="hidenData"  href="#"><h3>${user?.email}</h3></a>
     <a  class="hidenData"  href="#"> <h3>${user?.number}</h3></a>
     <div class="moreDetails">
        <button onclick='viewUser(${user?.id})' class="features"> <i class='bx bxs-user-detail features'></i></button>
        <button onclick='takeToTrash(${user.id})' class="deleteBtn features"> <i class='bx bx-trash features'></i></button>
     </div>
     </div>`;
    contactContainer.insertAdjacentHTML("beforeend", userHtml);
  });
}

function viewUser(id) {
  const user = users.find((user) => user.id == id);
  userDetailcontainer.classList.add("userDetailcontainer");
  userDetailcontainer.classList.remove("userDetailcontainerActive");
  const dateArr = user.createdAt.split("T");
  userDetailcontainer.innerHTML = ` <div class="details detailsActive">
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
  </div>`;
}

function exitDetails() {
  userDetailcontainer.classList.remove("userDetailcontainer");
  userDetailcontainer.classList.add("userDetailcontainerActive");
}
function takeToTrash(id) {
  console.log();
  // alertText.classList.add("alert");
  // alertText.classList.remove("alertActive");
  overlay.style.display = "block";
  alertText.innerHTML = `<div class="deleteAlertForm">
<div class="alert-header">
    <i class='bx bx-x'></i>
</div>
<div class="alert-content">
    <h3>Are You Sure?</h3>
    <p>Do really want to delete the contact?</p>
    <p>The deleted contacts will be stored in the trush.</p>
</div>
    <div class="alert-btns">
        <button onclick="cancelTrash()" id="quitBtn">Back</button>
        <button onclick='toTrash(${id})'  id="deleteBtn" class="deleteBtn">Delete</button>
 </div> 
</div>`;
}
function cancelTrash() {
  alertText.classList.remove("alert");
  alertText.classList.add("alertActive");
  overlay.style.display = "none";
}
function toTrash(id) {
  trashUsers.push(users.find((user) => user.id == id));
  localStorage.setItem("trashUsers", JSON.stringify(trashUsers));
  console.log(trashUsers);
  window.location.reload();
  
}
let arr = [1, 2, 3, 4, 5,6,7];
let removedElements = arr.splice(4, 3);
console.log(removedElements);
console.log(arr);
