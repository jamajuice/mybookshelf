$( document ).ready(function() {

    //set initial window size look
    if($(window).width() <= 768) {
        $('.navbar').removeClass('navbar-fixed-top').addClass("navbar-static-top");
        $('.content').css("margin-top", "0");
    } else {
        $('.navbar').removeClass('navbar-static-top').addClass("navbar-fixed-top");
        $('.content').css("margin-top", "50px");
    }

    $('[data-toggle="offcanvas"]').click(function(){
       $("#navigation").toggleClass("hidden-xs");
   });

    //hide alerts
    $("#success-alert").hide();
    $("#remove-alert").hide();
    $("#success-nb-alert").hide();


    //handle book add
    $(document).on('click', 'button.book-add', (function(){
        $("#success-alert").alert();
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
             $("#success-alert").slideUp(500)
        });   
    }));

    //handle book remove
    $(document).on('click', 'button.book-remove', (function(){
        $("#remove-alert").alert();
        $("#remove-alert").fadeTo(2000, 500).slideUp(500, function(){
             $("#remove-alert").slideUp(500)
        });   
    }));

     $(document).on('click', 'button.add-book', (function(){
        $("#success-nb-alert").alert();
        $("#success-nb-alert").fadeTo(2000, 500).slideUp(500, function(){
             $("#success-nb-alert").slideUp(500)
        });   
    }));

    //hangle search click
    $('a[href="#toggle-search"], .navbar-bookshelfie .bookshelfie-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
        event.preventDefault();
        $('.navbar-bookshelfie .bookshelfie-search .input-group > input').val('');
        $('.navbar-bookshelfie .bookshelfie-search').toggleClass('open');
        $('a[href="#toggle-search"]').closest('li').toggleClass('active');
        $(".full-page").css("margin-top","0px");

        if ($('.navbar-bookshelfie .bookshelfie-search').hasClass('open')) {
            $("#closeBtn").click();
            /* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
            setTimeout(function() { 
                $('.navbar-bookshelfie .bookshelfie-search .form-control').focus();
            }, 100);
        }           
    }); 

    //handle search
     $(document).on('keyup', function(event) {
        if (event.which == 27 && $('.navbar-bookshelfie .bookshelfie-search').hasClass('open')) {
            $('a[href="#toggle-search"]').trigger('click');
        }
    });

     //handle window resize
     $( window ).resize(function() {
        if($(window).width() <= 768) {
            $('.navbar').removeClass('navbar-fixed-top').addClass("navbar-static-top");
            $('.content').css("margin-top", "0");
        } else {
            $('.navbar').removeClass('navbar-static-top').addClass("navbar-fixed-top");
            $('.content').css("margin-top", "50px");
        }
    });

    
});

   

   