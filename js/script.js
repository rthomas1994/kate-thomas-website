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

});