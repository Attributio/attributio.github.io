$(document).ready(function() {

    $(".radio-group.google input[value=true]").prop("checked", !0), $(".radio-group.google a").click(function() {
        return $(".radio-group.google a").removeClass("active"), $(this).hasClass("yes") ? ($(".radio-group.google input[value=true]").prop("checked", !0), $(this).addClass("active")) : ($(".radio-group.google input[value=false]").prop("checked", !0), $(this).addClass("active")), !1
    });

    $(".radio-group.facebook input[value=true]").prop("checked", !0), $(".radio-group.facebook a").click(function() {
        return $(".radio-group.facebook a").removeClass("active"), $(this).hasClass("yes") ? ($(".radio-group.facebook input[value=true]").prop("checked", !0), $(this).addClass("active")) : ($(".radio-group.facebook input[value=false]").prop("checked", !0), $(this).addClass("active")), !1
    });

    $("#client_monthly_budget_unknown").change(function() {
        $("#client_monthly_budget").prop("disabled", $(this).is(":checked"));
    });

    $("#client_monthly_budget_unknown").trigger("change");
    
    var client_id;
    if (typeof ga === 'function') {
        ga(function(tracker) {
          client_id = tracker.get('clientId');
        });
    }

    $("#new_client").submit(function(e){
        e.preventDefault(); 

        var name = $("input#client_first_name").val(),
        email = $("input#client_email_address").val(),
        website = $("input#client_website").val(),
        google = $("input[name=client_google]:checked").val(),
        facebook = $("input[name=client_facebook]:checked").val(),
        budget = $("input#client_monthly_budget").val(),
        channel = $("input#client_other").val(),
        location = $("input#client_specific_location").val(),
        time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        var data = {
          'entry.1595441572:name': name,
          'entry.42766654:email': email,
          'entry.1291296828:website': website,
          'entry.988833789:TRUE': google,
          'entry.1663771380:TRUE': facebook,
          'entry.1057000311:budget': budget,
          'entry.917090703:channel': channel,
          'entry.807709427:location': location,
          'entry.544274422:ip address': 'asd',
          'entry.1108506597:1234': client_id,
          'entry.220425346:PST': time_zone,
        };

        $.ajax({
            cache: false,
            crossDomain:true,
            type:"POST",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSePZjxqBsFijp2MfxjbK8KdGpY_03-BhEvWOPH41H5RPSijNQ/formResponse",
            dataType: "xml",
            data: data,
            success: function() {
                console.log('success');
            },
            error: function(data) {
                console.log(data.responseText);
            },
        });
    });

});