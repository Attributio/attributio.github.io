$(document).ready(function() {

    $(".radio-group.google input[value=true]").prop("checked", !0), $(".radio-group.google a").click(function() {
        return $(".radio-group.google a").removeClass("active"), $(this).hasClass("yes") ? ($(".radio-group.google input[value=true]").prop("checked", !0), $(this).addClass("active")) : ($(".radio-group.google input[value=false]").prop("checked", !0), $(this).addClass("active")), !1
    });

    $(".radio-group.facebook input[value=true]").prop("checked", !0), $(".radio-group.facebook a").click(function() {
        return $(".radio-group.facebook a").removeClass("active"), $(this).hasClass("yes") ? ($(".radio-group.facebook input[value=true]").prop("checked", !0), $(this).addClass("active")) : ($(".radio-group.facebook input[value=false]").prop("checked", !0), $(this).addClass("active")), !1
    });

    $("#client_questionnaire_attributes_monthly_budget_unknown").change(function() {
        $("#client_questionnaire_attributes_monthly_budget_currency").prop("disabled", $(this).is(":checked")), $("#client_questionnaire_attributes_monthly_budget").prop("disabled", $(this).is(":checked"))
    });

    $("#client_questionnaire_attributes_monthly_budget_unknown").trigger("change");

});