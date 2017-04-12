$(document).ready(function() {

  $(".track").click(function(){

    if (typeof ga === 'function') {
      ga('send', {
        hitType: 'event',
        eventCategory: $(this).data("event-category"),
        eventAction: $(this).data("event-action"),
        eventLabel: $(this).data("event-label") + ': ' + $(this).text()
      });

    }

    return true;   
  });

});