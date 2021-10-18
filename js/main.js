function LogConcole(Name, Phone, Rights) {
  console.log('Name: ' + Name);
  console.log('Phone: ' + Phone);
}
var modal = document.getElementById("modal");
var btn = document.getElementById("open-modal");
var btn2 = document.getElementById("open-modal2");
var span = document.getElementsByClassName("modal-close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
btn2.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: true,

  slidesPerView: 1,

  speceBetween: 30,

  autoplay: { delay: 2000 },
});