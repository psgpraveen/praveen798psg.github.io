let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
let homeIcon = document.querySelector('.home-icon');

homeIcon.addEventListener('click', () => {
  window.location.href = "index.html";
});
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.toggle-button');
const list = document.querySelector('.list');

toggleButton.addEventListener('click', () => {
  list.classList.toggle('visible');
});
function changeFilter(img) {
  img.classList.toggle("black");
}
function showNotification() {
  const notificationBox = document.querySelector('.notification-box');
  notificationBox.classList.add('show');
}

function closeNotification() {
  const notificationBox = document.querySelector('.notification-box');
  notificationBox.classList.remove('show');
}

const closeBtn = document.querySelector('.notification-close');
closeBtn.addEventListener('click', closeNotification);



function showNotification1() {
  const notificationBox1 = document.querySelector('.notification-box1');
  notificationBox1.classList.add('show');
}

function closeNotification1() {
  const notificationBox1 = document.querySelector('.notification-box1');
  notificationBox1.classList.remove('show');
}

const closeBtn1 = document.querySelector('.notification-close1');
closeBtn1.addEventListener('click', closeNotification1);


