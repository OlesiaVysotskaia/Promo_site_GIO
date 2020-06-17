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
    top: ['110px','245px'],
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
    easing: 'easeOutBack',
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
    targets: '.content',
    duration: 400,
    top: ['110px'],
    easing: 'easeOutBack',
  }, 800)
  .add({
    targets: '.nav_mobile',
    begin: function () {
      document.querySelector('.nav_mobile').style.display = 'none'}
  }, 900)

  let mobile_menu_backPlay =
  document.querySelector('.nav_mobile-back')

  mobile_menu_backPlay.onclick = mobile_menu_back.play
}



let poster_hide1 = anime.timeline({
autoplay: false
})
poster_hide1
.add({
  targets: '.poster1',
  opacity: [100,0],
  easing: 'easeInSine',
  duration: 200,
})


let poster_hide1Play =
document.querySelector('.poster1')

poster_hide1Play.onclick = poster_hide1.play
