var scrollOffset = 70;

$(document).ready(function() {

    // Scroll to relevant section from nav bar
    $(".navItem").click(function() {

        // Get clicked item
        var clickedNavItem = $(this).attr("id").replace("nav_", "");

        $("html, body").animate({
            scrollTop: $("#" + clickedNavItem).offset().top - scrollOffset
        }, 400);

    });

	// $("#nav_home").click(function() {
 //        $("html, body").animate({
 //            scrollTop: 0
 //        }, 400)
	// });

	// $("#nav_work").click(function() {
 //        $("html, body").animate({
 //            scrollTop: $("#work").offset().top - scrollOffset
 //        }, 400)
	// });

    // $("#nav_resume").click(function() {
    //     $("html, body").animate({
    //         scrollTop: $("#resume").offset().top - scrollOffset
    //     }, 400)
    // });

	// $("#nav_contact").click(function() {
 //        $("html, body").animate({
 //            scrollTop: $("#contact").offset().top - scrollOffset
 //        }, 400)
	// });

});