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
  top: ['140px','245px'],
  easing: 'easeOutBack',
}, 1200)
.add({
  begin: function () {
    document.querySelector('body').style.backgroundColor = '#63FF49'}
}, 1200)
.add({
  begin: function () {
    document.querySelector('.navigation').style.backgroundColor = '#63FF49'}
}, 1200)
.add({
  begin: function () {
    document.querySelector('.nav_mobile-back').style.display = 'block'}
}, 1300)
.add({
  begin: function () {
    document.querySelector('.nav-back-block').style.display = 'block'}
}, 1300)
.add({
  begin: function () {
    document.querySelector('.nav').style.display = 'flex'}
}, 1400)
.add({
  targets: '.nav',
  top: ['-100px','70px'],
  easing: 'easeOutBack',
}, 1400)


let mobile_menuPlay =
document.querySelector('.nav_mobile')

mobile_menuPlay.onclick = mobile_menu.play
