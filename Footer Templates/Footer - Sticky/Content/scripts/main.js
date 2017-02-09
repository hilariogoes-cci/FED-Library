/* All custom scriptings/jquery functions will come here */ 


//global options

var globalOptions = {
    windowWidth : null,
    windowHeight : null,
    documentWidth : null,
    documentHeight : null,
    mainSidebar : $(".main-sidebar")
};

//utilities 
var utilities = {
    
    //dropDown Sidebar
    dropdown : function(){
        'use strict';
        
        $(".main-sidebar .dropdown-toggle").click(function(){
            var el =  $(this).parent().find(".dropdown-menu"),
                elParent = el.parent(".dropdown"); 
            
            if(elParent.hasClass("open")){
                el.slideUp();
                elParent.removeClass("open");
            }
            else{
                el.slideDown();
                elParent.addClass("open");
            }
            
        });
    },
    
    //sidebar toggle 
    toggleMainSidebar : function(){
        'use strict';
        
        $("[data-toggle='main-sidebar-toggle']").click(function(){
             $('body').toggleClass("main-sidebar-open"); 
        });
    },
    
    //find window width height 
    windowSize : {
      height : function(){
          'use strict';
          return($(window).height());
      },
        width : function(){
          'use strict';
          return($(window).width());
      }  
    },
    
    //find document width height 
    documentSize : {
      height : function(){
          'use strict';
          return($(document).height());
      },
      width : function(){
          'use strict';
          return($(document).width());
      }  
    }
    
    
    
};

//fixes

var fix = {
    sidebar: function(){
        'use strict';
        
        setTimeout(function(){ 
            globalOptions.documentHeight = utilities.documentSize.height();
            globalOptions.mainSidebar.css("min-height", globalOptions.documentHeight);
        },1000);
    } 
};


 $(function () {
   'use strict'; 
     utilities.dropdown();//initiate dropdown
     utilities.toggleMainSidebar();//intiate sidebar toggle
     fix.sidebar(); //set sidebar height
}());


 