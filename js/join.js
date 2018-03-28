$(document).ready(function() {

  $(".radio-group.google input[value=true]").prop("checked", 1), $(".radio-group.google a").click(function() {
    return $(".radio-group.google a").removeClass("active"), $(this).hasClass("yes") 
            ? ($(".radio-group.google input[value=true]").prop("checked", 1), $(this).addClass("active")) 
            : ($(".radio-group.google input[value=false]").prop("checked", 1), $(this).addClass("active")), !1
  });

  $(".radio-group.facebook input[value=true]").prop("checked", 1), $(".radio-group.facebook a").click(function() {
    return $(".radio-group.facebook a").removeClass("active"), $(this).hasClass("yes") 
            ? ($(".radio-group.facebook input[value=true]").prop("checked", 1), $(this).addClass("active")) 
            : ($(".radio-group.facebook input[value=false]").prop("checked", 1), $(this).addClass("active")), !1
  });

  $("#client_monthly_budget_unknown").change(function() {
    $("#client_monthly_budget").prop("disabled", $(this).is(":checked"));
  });

  $("#client_monthly_budget_unknown").trigger("change");

  var client_id = $.cookie("clientId");
  client_id = client_id.toString();

  var referrer = document.referrer;

  $("form#new_client").submit(function(e){
    e.preventDefault();

    var name = $("input#client_first_name").val(),
    email = $("input#client_email_address").val(),
    website = $("input#client_website").val(),
    google = $("input#client_google_true").prop("checked") ? "TRUE" : "FALSE",
    facebook = $("input#client_facebook_true").prop("checked") ? "TRUE" : "FALSE",
    budget = $("input#client_monthly_budget").val(),
    channel = $("textarea#client_other").val(),
    target_location = $("textarea#client_specific_location").val(),
    time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    var required = [{id:'name',value:name},{id:'email',value:email},{id:'website',value:website}];
    var alerts = [];
    required.map(function(field){
      if (field['value'] == "") {
        alerts.push(field['id'] + ' is required.') 
      }
    });
    if (alerts.length > 0) {
      return alert(alerts.join('\n'));
    }

    var data = {
      'entry.1595441572': name,
      'entry.42766654': email,
      'entry.1291296828': website,
      'entry.988833789': google,
      'entry.1663771380': facebook,
      'entry.1057000311': budget,
      'entry.917090703': channel,
      'entry.807709427': target_location,
      'entry.1108506597': client_id,
      'entry.1842484305': referrer,
      'entry.220425346': time_zone,
    };
    
    $.ajax({
      cache: false,
      crossDomain:true,
      type:"POST",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSePZjxqBsFijp2MfxjbK8KdGpY_03-BhEvWOPH41H5RPSijNQ/formResponse",
      dataType: "xml",
      data: data,
      statusCode: {
          0: function() {
            window.location.href = "/thanks/";
          },
          200: function() {
            window.location.href = "/thanks/";
          }
      }
    });      
  });

});