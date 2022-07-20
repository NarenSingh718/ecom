var address;
$('.loading').hide();
$("#consultationForm").submit(function (event) {

    $('.loading').show();
    $('.not-loading').hide();
    event.preventDefault();

    var mobile = $('#mobile').val();
    var name = $('#name').val();
    var email = $('#email').val();
    var city = $('#city').val();
    var message = $('#message').val();

    var time_slot = $('#time_slot').val();
    var time_slot = ", Preferred Time Slot: " + time_slot;

    var keyword = $('#keyword').val();
    var campaignId = $('#campaignId').val();
    var keywordAndCampaignId = keyword + campaignId;

    var utm_campaign = $("#utm_campaign").val();
    var utm_source = $("#utm_source").val();
    var utm_medium = $("#utm_medium").val();
    var utm_keyword = $("#utm_keyword").val();
    var utm_channel = $("#utm_channel").val();
    var lead_referrer_url = $("#lead_referrer_url").val();

    var clientId = "";
    ga(function (tracker) {
        clientId = tracker.get("clientId");
        console.log(clientId);
    });
    var gclid = $("#gclid").val();

    var params = new URLSearchParams(window.location.search);


    var adgroupid = params.get('adgroupid');
    var utm_term = params.get('utm_term');
    var ad = params.get('ad');
    var mt = params.get('mt');
    var adpos = params.get('adpos');

    var Obj = {
        "form_name": "Landing page Univalley Study uk",
        "ls_campaign": "Landing page Univalley Study uk",
        "name": name,
        "email": email,
        "phone": mobile,
        "city": city,
        "time_slot": time_slot,
        // "postalcode": zipcode,
        // "country": country,
        // "state": state,
        // "street": street,
        "description": keywordAndCampaignId,
        "utm_campaign": utm_campaign,
        "utm_medium": utm_medium,
        "utm_source": utm_source,
        "utm_keyword": utm_keyword,
        "utm_channel": utm_channel,
        "referrer_url": lead_referrer_url,
        "ga_cid": clientId,
        "gclid": gclid,
        "adgroupid": adgroupid,
        "utm_term": utm_term,
        "ad": ad,
        "mt": mt,
        "adpos": adpos,
    };

    webengage.user.login(mobile);
    webengage.user.setAttribute('we_email', email);
    webengage.user.setAttribute('we_phone', mobile);
    webengage.user.setAttribute('we_first_name', name);


    // alert('asdfasdf');
    // console.log(Obj,' object');
    // return true;


    if (mobile.charAt(0) === '6' || mobile.charAt(0) === '7' || mobile.charAt(0) === '8' || mobile.charAt(0) === '9' && mobile.length == 10) {


        $('#applybutton').attr('disabled', true);
        $("#applybutton").html('Processing');
        $.ajax({
            // url: 'http://dev.leverageedu.com/api/zoho-crm/insert-lead',
            url: 'https://leverageedu.com/services/integrations/v2/insert-lead',
            // headers: {
            //     // 'Api-Key':'34567890'
            // },
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(Obj),
            // processData: false,
            success: function (data) {
                webengage.user.setAttribute({
                    we_phone: mobile,
                    "Contact Number 1": mobile,
                    we_first_name: name.split(" ").length === 1 ?
                        name
                            .split(" ")
                            .slice(-1)
                            .join(" ") : name
                                .split(" ")
                                .slice(0, -1)
                                .join(" "), //First Name
                    we_last_name: name.split(" ").length > 1 ?
                        name
                            .split(" ")
                            .slice(-1)
                            .join(" ") ?
                            name
                                .split(" ")
                                .slice(-1)
                                .join(" ") :
                            "" : "",
                    we_email: email ? email : "",
                });
                webengage.user.setAttribute("Address", {
                    "City": address,
                });
                webengage.user.login(mobile);
                $('#msg').html("We have received your request and we revert within 24 to 48 hours.").fadeIn('slow');
                $('#msg').delay(5000).fadeOut('slow');
                // twq('track', 'CompleteRegistration');
                
                fbq('track', 'CompleteRegistration');
                fbq('track', 'Lead', {
                    'name': name,
                    'email': email
                });

                $('.loading').hide();
                $('.not-loading').show();


                window.location.href = "thankyou.html?"+ "email=" + email;
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
                $('#errorMsg').html("Your Request could not sent.").fadeIn('slow');
                $('#errorMsg').delay(5000).fadeOut('slow');
                $('#applybutton').removeAttr('disabled');
                $("#applybutton").html('Book Now');

                $('.loading').hide();
                $('.not-loading').show();


            }
        });
    } else {

        $('.loading').hide();
        $('.not-loading').show();

        $('.mobileErrorMsg').show();

        $('.mobileErrorMsg').html("Please enter a valid mobile number").fadeIn('slow');
        // $('.mobileErrorMsg').delay(5000).fadeOut('slow');
        $('.mobileErrorMsg').css({ 'color': 'red', 'font-size': '10px' });
        $("#mobile").css({ 'border': '1px solid red' });
        $(".mobile-invalid").css({ 'color': 'red' });
    }
});


// var searchInput = 'search_input';
// var zipcode;
// var country;
// var state;
// var city;
// var street;
// $(document).ready(function () {
//     var autocomplete;
//     autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
//         types: ['geocode'],

//     })
//     google.maps.event.addListener(autocomplete, 'place_changed', function () {
//         var near_place = autocomplete.getPlace();
//         //**************************Get city state zipcode etc******************/
//         // for (i = 0; i < near_place.length; i++) {

//         for (var j = 0; j < near_place.address_components.length; j++) {
//             for (var k = 0; k < near_place.address_components[j].types.length; k++) {

//                 if (near_place.address_components[j].types[k] == "postal_code") {
//                     zipcode = near_place.address_components[j].short_name;
//                 }

//                 if (near_place.address_components[j].types[k] == "country") {
//                     country = near_place.address_components[j].long_name;

//                 }

//                 if (near_place.address_components[j].types[k] == "administrative_area_level_1") {
//                     state = near_place.address_components[j].long_name;

//                 }

//                 if (near_place.address_components[j].types[k] == "administrative_area_level_2") {
//                     city = near_place.address_components[j].short_name;

//                 }
//                 if (near_place.address_components[j].types[k] == "locality") {
//                     street = "locality: " + near_place.address_components[j].long_name;

//                 }
//                 if (near_place.address_components[j].types[k] == "premise") {
//                     street ? street += ", premise: " + near_place.address_components[j].long_name : street = "premise: " + near_place.address_components[j].long_name;

//                 }
//                 if (near_place.address_components[j].types[k] == "route") {
//                     street ? street += ", route: " + near_place.address_components[j].long_name : street = "route: " + near_place.address_components[j].long_name;

//                 }
//             }
//         }
//         // }
//         //*********************************END****************************** */

//         address = near_place.formatted_address;

//         document.getElementById('loc_lat').value = near_place.geometry.location.lat();
//         document.getElementById('loc_long').value = near_place.geometry.location.lng();


//         // document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
//         // document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
//     });
// });


$(document).ready(function () {

    let WindowWidth = $(window).width();
    console.log('window width ', WindowWidth);
    if (WindowWidth < 768) {
        $("#cnsultationBtn").show();
    } else {
        $("#cnsultationBtn").hide();
    }

    var cnsultationBtnElement = $("#regForm").first();
    var cnsultationBtnElementPosition = cnsultationBtnElement.position();
    $("#cnsultationBtn").hide();
    // console.log('cnsultationBtnElementPosition', cnsultationBtnElementPosition);
    $(window).scroll(function () {

        WindowWidth = $(window).width();
        yOffset = window.pageYOffset;
        // console.log("yOffset : ", yOffset);
        // console.log("position of element : ", cnsultationBtnElementPosition.top);

        if (yOffset >= cnsultationBtnElementPosition.top && WindowWidth < 768) {
            $("#cnsultationBtn").show();
            // console.log('show')
        } else {
            $("#cnsultationBtn").hide();
            // console.log('hide')
        }
    });
});