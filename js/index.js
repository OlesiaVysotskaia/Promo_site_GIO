if (window.matchMedia("(max-width: 767px)").matches) {
  let mobile_menu = anime.timeline({
  autoplay: false
  })

  mobile_menu
  .add({
    targets: '.nav_mobile',
    begin: function () {
      document.querySelector('.nav_mobile').style.display = 'none'}
  })
  .add({
    targets: '.content',
    duration: 400,
    top: ['110px','265px'],
    easing: 'easeOutBack',
  }, 700)
  .add({
    begin: function () {
      document.querySelector('body').style.backgroundColor = '#63FF49'}
  }, 700)
  .add({
    begin: function () {
      document.querySelector('.navigation').style.backgroundColor = '#63FF49'}
  }, 700)
  .add({
    targets: '.font',
    color: '#000000'
  }, 700)
  .add({
    targets: '.int',
    color: '#000000'
  }, 700)
  .add({
    begin: function () {
      document.querySelector('.nav-back-block').style.display = 'flex'}
  }, 1200)
  .add({
    begin: function () {
      document.querySelector('.nav_mobile-back').style.display = 'flex'}
  }, 1200)
  .add({
    targets: '.nav_mobile-back',
    duration: 300,
    rotate: ['360deg','0deg'],
    easing: 'easeInBack',
  }, 1300)
  .add({
    begin: function () {
      document.querySelector('.nav').style.display = 'flex'}
  }, 1200)
  .add({
    targets: '.nav',
    duration: 300,
    top: ['-100px','75px'],
    easing: 'easeOutBack',
  }, 1300)


  let mobile_menuPlay =
  document.querySelector('.nav_mobile')

  mobile_menuPlay.onclick = mobile_menu.play





  let mobile_menu_back = anime.timeline({
  autoplay: false
  })

  mobile_menu_back
  .add({
    targets: '.nav',
    duration: 300,
    top: ['75px','100px'],
    easing: 'easeInBack',
  }, 200)
  .add({
    begin: function () {
      document.querySelector('.nav').style.display = 'none'}
  }, 600)
  .add({
    targets: '.nav_mobile-back',
    duration: 300,
    rotate: ['0deg','360deg'],
    easing: 'easeInBack',
  }, 200)
  .add({
    begin: function () {
      document.querySelector('.nav_mobile-back').style.display = 'none'}
  }, 600)
  .add({
    begin: function () {
      document.querySelector('.nav-back-block').style.display = 'none'}
  }, 600)
  .add({
    begin: function () {
      document.querySelector('.navigation').style.backgroundColor = 'black'}
  }, 800)
  .add({
    begin: function () {
      document.querySelector('body').style.backgroundColor = 'black'}
  }, 800)
  .add({
    targets: '.font',
    color: '#FFFFFF'
  }, 800)
  .add({
    targets: '.int',
    color: '#63FF49'
  }, 800)
  .add({
    targets: '.content',
    duration: 400,
    top: ['110px'],
    easing: 'easeOutBack',
  }, 900)
  .add({
    targets: '.nav_mobile',
    begin: function () {
      document.querySelector('.nav_mobile').style.display = 'block'}
  }, 900)

  let mobile_menu_backPlay =
  document.querySelector('.nav_mobile-back')

  mobile_menu_backPlay.onclick = mobile_menu_back.play
}

$(document).ready(function() {
$(".poster1").click(function() {
$(".poster1").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster2").click(function() {
$(".poster2").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster3").click(function() {
$(".poster3").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster4").click(function() {
$(".poster4").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster5").click(function() {
$(".poster5").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster6").click(function() {
$(".poster6").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster7").click(function() {
$(".poster7").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster8").click(function() {
$(".poster8").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster9").click(function() {
$(".poster9").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster10").click(function() {
$(".poster10").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster11").click(function() {
$(".poster11").toggleClass("hide");
});});
$(document).ready(function() {
$(".poster12").click(function() {
$(".poster12").toggleClass("hide");
});});
