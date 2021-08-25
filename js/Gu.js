$(document).ready(function() {

    var WinWidth = $(window).width()

    // Refresh page on resize 
    $(window).resize(function() {
        var WinWidthAfterResize = $(window).width();
        console.log(WinWidth + "   " + WinWidthAfterResize)
        if (WinWidth != WinWidthAfterResize) {
            location.reload();
        }
    });

    
	// Close Nav When Click On it
	$(window).on("load scroll resize" , function(){

		// Close Nav When Click On it
		var WinWidth = $(window).width()
		if(WinWidth < 768){	
			$('.navbar-nav > .nav-item:not(:last-child)> .nav-link , .dropdown-item').on('click',function() {
				$('#nav-container').removeClass('show');
			});	
			$(window).on("scroll" , function(){
				$('#nav-container').removeClass('show');
				
			})
		}
	})

    var navHeight =$(".navbar").outerHeight(true);
    $("section").css("paddingTop" , navHeight + 15);
    $("section").css("paddingBottom" , navHeight);

	

    // Up Arrow Click
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 10) {
            $("nav").addClass("down")
            $("#up-arrow").show()
        } else {
            $("nav").removeClass("down")
            $("#up-arrow").fadeOut()
        }
    })
        // Up Arrow Click
    $("#up-arrow").click(function() {
        $("body, html").animate({
            scrollTop:0
        }, 100)
    });



    // Enable Plugin Animation On Scroll (AOS)
    AOS.init({
        duration: 1000,
        delay: 250
    })




    // $(window).on("load" , function(){
    $("#cover").hide();
    $("#body").css("opacity", "1")
        // })



        

}); //End ready() ==> End Code JQuery