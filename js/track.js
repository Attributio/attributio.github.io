$(document).ready(function() {

  $(".track").click(function(){

    if (typeof ga === 'function') {
      ga(function(tracker) {
        var clientId = tracker.get('clientId');
        ga('send', {
          hitType: 'event',
          eventCategory: $(this).data("event-category"),
          eventAction: $(this).data("event-action"),
          eventLabel: $(this).data("event-label") + ': ' + $(this).text(),
          dimension1: clientId
        });
      });

    }

    return true;   
  });

});