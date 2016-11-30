/* All custom scriptings/jquery functions will come here */

/* Navbar */
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
		console.log('a')
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
		console.log('b')
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});