var scrollOffset = 60;

$(document).ready(function() {

    // Scroll to relevant section from nav bar
    $(".navItem").click(function() {

        // Get clicked item
        var clickedNavItem = $(this).attr("id").replace("nav_", "");

        if (clickedNavItem == "about") {
            $("html, body").animate({ scrollTop: 0 }, 400);
        } else {
            $("html, body").animate({
                scrollTop: $("#" + clickedNavItem).offset().top - scrollOffset
            }, 400);
        }

        // Hide mobile nav
        $("#mobile_nav").removeClass("navContainer_content--slideDown");

    });

    // Show navbar on click
    $("#show_navbar").click(function() {
        $("#mobile_nav").addClass("navContainer_content--slideDown");
    });

    // Hide navbar on click
    $("#hide_navbar").click(function() {
        $("#mobile_nav").removeClass("navContainer_content--slideDown");
    });

    // Contact Form
    $("#submit_form").click(function() {

        // Get form data
        var formData = $("#contact_form").serialize();

        // Disable form
        $(".contactFormInput").addClass("textFieldContainer_input--disabled");

        // Show relevant buttons
        $("#submit_form").addClass("displayNone");
        $("#submit_form_spin").removeClass("displayNone");


        $.ajax({
            url: "/contact.php",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function(data) {

                setTimeout(function() {

                    // Show confirmation message
                    $("#contact_form_body").addClass("displayNone");
                    $("#contact_form_confirmation").removeClass("displayNone");

                    // Scroll to top of form
                    $("html, body").animate({
                        scrollTop: $("#contact").offset().top - scrollOffset
                    }, 400);

                }, 500);

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {

                // Set timeout to provide visual feedback to user
                setTimeout(function() {

                    // Set error text
                    if (errorThrown.length > 0) {
                        $("#contact_error_text").text(errorThrown);
                    } else {
                        $("#contact_error_text").text("There was a problem sending your message. Please try again later.");
                    }

                    // Enable form
                    $(".contactFormInput").removeClass("textFieldContainer_input--disabled");

                    // Show error message
                    $("#contact_error").removeClass("displayNone");
                    
                    // Show relevant buttons
                    $("#submit_form").removeClass("displayNone");
                    $("#submit_form_spin").addClass("displayNone");

                }, 500);

            }
        });

    });

    // Hide error message on keydown of form input
    $(".contactFormInput").keydown(function() {
        $("#contact_error").addClass("displayNone");
    });

});