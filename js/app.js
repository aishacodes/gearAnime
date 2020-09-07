$(".wrapper").hover(function() {
        $(".top").addClass('active');
        $(".cal").css("display", "flex");
    },
    function() {
        $(".top").removeClass("active");
        $(".cal").css("display", "none");

    });
$(".button").hover(function() {
        $(this).addClass('button-active');
    },
    function() {
        $(this).removeClass("button-active");
    });