//'use strict';
(function(){
//document.addEventListener("DOMContentLoaded", function(event) {
  var heroesImgArray = [];
  var Photo = function(name, source) {
    this.source = source;
    this.name = name;
    // this.votes = [];
  };
  heroesImgArray.push(new Photo('Superman','images/0.jpg'));
  heroesImgArray.push(new Photo('Batman','images/1.jpg'));
  heroesImgArray.push(new Photo('Flash','images/2.jpg'));
  heroesImgArray.push(new Photo('Green Arrow','images/3.jpg'));
  heroesImgArray.push(new Photo('Green Lantern','images/4.jpg'));
  heroesImgArray.push(new Photo('Wonder Woman','images/5.jpg'));
  heroesImgArray.push(new Photo('Aquaman','images/6.jpg'));
  heroesImgArray.push(new Photo('Iron-Man','images/7.jpg'));
  heroesImgArray.push(new Photo('Captain America','images/8.jpg'));
  heroesImgArray.push(new Photo('Thor','images/9.jpg'));
  heroesImgArray.push(new Photo('Hulk','images/10.jpg'));
  heroesImgArray.push(new Photo('Black Widow','images/11.jpg'));
  heroesImgArray.push(new Photo('Hawkeye','images/12.jpg'));
  heroesImgArray.push(new Photo('Spider-Man','images/13.jpg'));

  var hero1 = Math.floor(Math.random() * (7 - 1)) + 1;
  var hero2 = Math.floor(Math.random() * (14 - 8)) + 8;
  var elPhoto1 = document.getElementById('photo1');
  elPhoto1.setAttribute('src',heroesImgArray[hero1].source);
  // votes.push(1);
  // console.log(hero1.votes.length);
  var elPhoto2 = document.getElementById('photo2');
  console.log(hero2);
  elPhoto2.setAttribute('src',heroesImgArray[hero2].source);

  // var canvas = document.getElementById('canvas1');
  // var ctx = canvas1.getContext('2d');

  $(document).ready(function() {
    $('#photo-one').click(function() {
      $(this).addClass('winner');
    })
  });

  //var votedOne = document.getElementById('choose1');
  //var votedTwo = document.getElementById('choose2');//the listener will go on this
  //var voteForOne = function(event) {
  //  event.preventDefault();
  //  ctx.fillStyle = "#ff0000";
  //  ctx.beginPath();
  //  ctx.arc(100,100,50,0,Math.PI*2);
  //  ctx.fill();
//
  //  var el = document.getElementById('choice1');
  //  el.setAttribute('class', 'choice-box winner');
  //  var elP1 = document.getElementById('button1-wrap');
  //  elP1.setAttribute('class', 'hidethis');
  //  var elP2 = document.getElementById('button2-wrap');
  //  elP2.setAttribute('class', 'hidethis');
  //  var elWin = document.getElementById('one-wins');
  //  elWin.setAttribute('class', 'showthis blink');
  //  var elLose = document.getElementById('two-loses');
  //  elLose.setAttribute('class', 'showthis blink');
  //  var elPlayAgain = document.getElementById('play-again-wrap');
  //  elPlayAgain.setAttribute('class', 'showthis');
  //  console.log('You voted for ' + heroesImgArray[hero1].name + '!');
  //};
  //var voteForTwo = function(event) {
  //  event.preventDefault();
  //  ctx.fillStyle = "#0000FF";
  //  ctx.beginPath();
  //  ctx.arc(100,100,50,0,Math.PI*2);
  //  ctx.fill();
//
  //  var el = document.getElementById('choice2');
  //  el.setAttribute('class', 'choice-box winner');
  //  var elP1 = document.getElementById('button1-wrap');
  //  elP1.setAttribute('class', 'hidethis');
  //  var elP2 = document.getElementById('button2-wrap');
  //  elP2.setAttribute('class', 'hidethis');
  //  var elWin = document.getElementById('two-wins');
  //  elWin.setAttribute('class', 'showthis blink');
  //  var elLose = document.getElementById('one-loses');
  //  elLose.setAttribute('class', 'showthis blink');
  //  var elPlayAgain = document.getElementById('play-again-wrap');
  //  elPlayAgain.setAttribute('class', 'showthis');
  //  console.log('You voted for ' + heroesImgArray[hero2].name + '!');
  //};
  //// var voteAgain = function(event) {
  ////   event.preventDefault();
//
//
  //// };
//
  //votedOne.addEventListener('click', voteForOne);
  //votedTwo.addEventListener('click', voteForTwo);
//});
})();
