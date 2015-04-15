'use strict';
(function(){
document.addEventListener("DOMContentLoaded", function(event) {
  var heroesImgArray = [];
  var Photo = function(heroName, folder) {
    this.folder = folder;
    this.heroName = heroName;
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
  elPhoto1.setAttribute('src',heroesImgArray[hero1].folder);
  var elPhoto2 = document.getElementById('photo2');
  elPhoto2.setAttribute('src',heroesImgArray[hero2].folder);

  var pieData = [
    {
      value: 1,
      color: 'blue',
      label: 'Marvel'
    },
    {
      value: 1,
      color: 'red',
      label: 'DC'
    }
  ];

  var pieOptions = {
    segmentShowStroke: false,
    animateScale: true
  };

  var canvas = document.getElementById('canvas').getContext('2d');
  var chart1 = new Chart(canvas).Pie(pieData, pieOptions);


  $(document).ready(function() {
    $('#photo-one').click(function() {
      chart1.segments[1].value += 1;
      chart1.update();
      $(this).addClass('winner');

    })
    $('#photo-two').click(function() {
      chart1.segments[0].value += 1;
      chart1.update();
      $(this).addClass('winner');
    })
  });
});
})();
