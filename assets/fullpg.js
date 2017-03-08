$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdpage', 'lastPage'],
    menu: 'menu',
    scrollingSpeed: 1000,
  });
  $('#posts').click(function(){
    $.fn.fullpage.moveTo(0);
  });
});
