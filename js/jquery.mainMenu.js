
(function ($) {
    "use strict";
    $.fn.mainMenu = function (options) {
        var defaults, settings, menuItem, charItem, menuWidth = false;
        
        settings = $.extend({}, defaults, options);
        return this.each(function () {
            $(window).resize(function () {
                if ($(".menu").outerWidth() >= 820) {
                    
                    
                    $(".main-menu").css("display", "block");
                    
                }
				


                if ($(".menu").outerWidth() < 820) {
                    
                   $(".main-menu").hide();
                }
            });

            


            $(".menu-header").click(function () {

                $(".main-menu").slideToggle(settings.toggleSpeed);

            });

            
             $("a").click(function () {

                $(".main-menu").hide();

            });


        });
    };
    
})(jQuery);
