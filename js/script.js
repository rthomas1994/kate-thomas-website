var scrollOffset = 70;

$(document).ready(function() {

	$("#nav_home").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 400)
	});

	$("#nav_work").click(function() {
        $("html, body").animate({
            scrollTop: $("#work").offset().top - scrollOffset
        }, 400)
	});

    // $("#nav_resume").click(function() {
    //     $("html, body").animate({
    //         scrollTop: $("#resume").offset().top - scrollOffset
    //     }, 400)
    // });

	$("#nav_contact").click(function() {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top - scrollOffset
        }, 400)
	});

});