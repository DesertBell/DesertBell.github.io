$('#topnav .navbar-nav a').on('click', function(){
    $('#topnav .navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});