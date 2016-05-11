
'use strict';
var MyApp = {};

MyApp.addToList = function(list) {
  var $newLi = $('<li>');
  var $newItemText = $('#new-thing');
  $newLi.html($newItemText.val());
  $newItemText.val('');
  if ($newLi.html() !== '') {
    list.append($newLi);
  }
  MyApp.addButtons($newLi);
}

MyApp.initiateButtons = function($thingList) {
  $thingList.find('li').each(function() {
    MyApp.addButtons($(this));
  });
}

MyApp.addButtons = function($item) {
  var completeBtn = '<a href="#" class="complete">Shout-Out</a>  | ';
  $item.append(completeBtn);

  var deleteBtn = '<a href="#" class="delete">Not this week</a>';
  $item.append(deleteBtn);
}

$(function(date){
  var now = new Date();
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var day = days[now.getDay()];
  $('#day').html(day);
});

$(function(favoritePeople) {
  var $thingList = $('#fav-list');

//new thing button
  var $button = $('#new-thing-button');
  // button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
    MyApp.addToList($thingList);
  });

//hover controls
  $thingList.on('mouseenter mouseleave', 'li', function(event) {
       if (event.type == 'mouseenter') {
         $(this).removeClass('inactive');
         $(this).siblings().addClass('inactive');
      } else if (event.type == 'mouseleave') {
          $(this).siblings().removeClass('inactive');
      }
  });

//complete class toggle
  $thingList.on('click', 'a.complete', function(e) {
    e.preventDefault();
    var listItem = $(this).parent('li');
    listItem.toggleClass('completed');
  });

//delete class function
  $thingList.on('click', 'a.delete', function(e) {
    e.preventDefault();
    $(this).parent('li').remove();
  });

  MyApp.initiateButtons($thingList);
});

//finish coding shout-outs function
