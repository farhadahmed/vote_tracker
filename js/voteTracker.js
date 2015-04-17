'use strict';

(function(){
  var heroesImgArray;

  var saveToLocalStorage = function(data) {
    localStorage.setItem('ajaxData', JSON.stringify(data));
  };

  $.ajax({
    url: "https://api.imgur.com/3/album/tBRTy.json",
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 22079935028b382'
    }
  })
  .done(function(res) {
    heroesImgArray = res.data.images;
    console.dir(res.data);
    //getNewImages();
    renderImages(heroesImgArray);
  })
  .fail(function(err) {
    console.log(err);
  });


// document.addEventListener("load", function(event) {
  var Photo = function(heroName, folder) {
    this.folder = folder;
    this.heroName = heroName;
  };

  var getNewImages = function() {
    var hero1 = Math.floor(Math.random() * (7 - 1)) + 1;
    var hero2 = Math.floor(Math.random() * (14 - 8)) + 8;
    var elPhoto1 = document.getElementById('photo1');
    elPhoto1.setAttribute('src',heroesImgArray[hero1].link);
    var elPhoto2 = document.getElementById('photo2');
    elPhoto2.setAttribute('src',heroesImgArray[hero2].link);
  };


  var renderImages = function(heroesImgArray) {
    var $main = $('#content');

    heroesImgArray.forEach(function(img) {
      $main.append('<img src="' + img.link + '"></img>');
    });
    saveToLocalStorage(heroesImgArray);
  };

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

  $(function() {
    $('#photo-one').click(function() {
      chart1.segments[1].value += 1;
      chart1.update();
      getNewImages();
    })
    $('#photo-two').click(function() {
      chart1.segments[0].value += 1;
      chart1.update();
      getNewImages();
    })
  });
// });
})();
