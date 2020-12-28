var scrollOffset = 90;

$(document).ready(function() {

    if ($(window).width() < 769) {
        scrollOffset = 70;
    }

    // Scroll to relevant section from nav bar
    $(".navItem").click(function() {

        // Get clicked item
        var clickedNavItem = $(this).attr("id").replace("nav_", "");

        $("html, body").animate({
            scrollTop: $("#" + clickedNavItem).offset().top - scrollOffset
        }, 400);

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