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
  top: ['40px','180px'],
})
.add({
  begin: function () {
    document.querySelector('body').style.backgroundColor = '#63FF49'}
})
.add({
  begin: function () {
    document.querySelector('.navigation').style.backgroundColor = '#63FF49'}
})
.add({
  begin: function () {
    document.querySelector('h2').style.color = 'black'}
})
.add({
  begin: function () {
    document.querySelector('.nav_mobile-back').style.display = 'block'}
})
.add({
  targets: 'nav',
  begin: function () {
    document.querySelector('nav').style.display = 'block'},
  begin: function () {
    document.querySelector('nav').style.backgroundColor = '#63FF49'}
})
.add({
  targets: 'nav',
  height: [ '0px', '135px']
})


let mobile_menuPlay =
document.querySelector('.nav_mobile')

mobile_menuPlay.onclick = mobile_menu.play
