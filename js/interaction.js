$( document ).ready(function() {

    $('[data-toggle="offcanvas"]').click(function(){
       $("#navigation").toggleClass("hidden-xs");
   });

    $("#newBook").click(function(){
         $("#mySidenav").width(250);
         if( $('.bookselfie-search').hasClass("open")){
             $('.navbar-bookselfie .bookselfie-search').toggleClass('open');
             $('a[href="#toggle-search"]').closest('li').toggleClass('active');
             $(".full-page").css("margin-top","0px");
         }
     });

    $("#closeBtn").click(function(){
         $("#mySidenav").width(0);
     });
    


    $('a[href="#toggle-search"], .navbar-bookselfie .bookselfie-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
        event.preventDefault();
        $('.navbar-bookselfie .bookselfie-search .input-group > input').val('');
        $('.navbar-bookselfie .bookselfie-search').toggleClass('open');
        $('a[href="#toggle-search"]').closest('li').toggleClass('active');
        $(".full-page").css("margin-top","0px");

        if ($('.navbar-bookselfie .bookselfie-search').hasClass('open')) {
            $( ".full-page" ).animate({
                top: "+=50"
              }, 5000, function() {
                // Animation complete.
            });
            $("#closeBtn").click();
            /* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
            setTimeout(function() { 
                $('.navbar-bookselfie .bookselfie-search .form-control').focus();
            }, 100);
        }           
    }); 

     $(document).on('keyup', function(event) {
        if (event.which == 27 && $('.navbar-bookselfie .bookselfie-search').hasClass('open')) {
            $('a[href="#toggle-search"]').trigger('click');
        }
    });
});

   

   