var status0=0;
var status1=0;
var status2=0;
var status3=0;
var status4=0;
function show_how(){
    $(".hidden.how").css("display","block");
    $(".hidden.navigation").css("display","none");
    $(".main.how").css("background","#f7605b");
    $(".main.navigation").css("background","rgba(108, 107, 198, 0.3)");
};
function show_nav(){
    $(".hidden.navigation").css("display","block");
    $(".hidden.how").css("display","none");
    $(".main.navigation").css("background","#f7605b");
    $(".main.how").css("background","rgba(108, 107, 198, 0.3)");
}
function first_arrows_rotate(){
    if(status0==0) {
        $(".more_info:eq(0)").css("display","block");
        $(".arrow_down:eq(0)").css("transform","rotate(-180deg)");
        status0=1;
    }
    else if (status0==1) {
        $(".more_info:eq(0)").css("display","none");
        $(".arrow_down:eq(0)").css("transform","rotate(-360deg)");
        status0=0;
    }
}
function second_arrows_rotate(){
    if(status1==0) {
        $(".more_info:eq(1)").css("display","block");
        $(".arrow_down:eq(1)").css("transform","rotate(-180deg)");
        status1=1;
    }
    else if (status1==1) {
        $(".more_info:eq(1)").css("display","none");
        $(".arrow_down:eq(1)").css("transform","rotate(-360deg)");
        status1=0;
    }
}
function third_arrows_rotate(){
    if(status2==0) {
        $(".more_info:eq(2)").css("display","block");
        $(".arrow_down:eq(2)").css("transform","rotate(-180deg)");
        status2=1;
    }
    else if (status2==1) {
        $(".more_info:eq(2)").css("display","none");
        $(".arrow_down:eq(2)").css("transform","rotate(-360deg)");
        status2=0;
    }
}
function fourth_arrows_rotate(){
    if(status3==0) {
        $(".more_info:eq(3)").css("display","block");
        $(".arrow_down:eq(3)").css("transform","rotate(-180deg)");
        status3=1;
    }
    else if (status3==1) {
        $(".more_info:eq(3)").css("display","none");
        $(".arrow_down:eq(3)").css("transform","rotate(-360deg)");
        status3=0;
    }
}
function fifth_arrows_rotate(){
    if(status4==0) {
        $(".more_info:eq(4)").css("display","block");
        $(".arrow_down:eq(4)").css("transform","rotate(-180deg)");
        status4=1;
    }
    else if (status4==1) {
        $(".more_info:eq(4)").css("display","none");
        $(".arrow_down:eq(4)").css("transform","rotate(-360deg)");
        status4=0;
    }
}
$(document).on('click', '.navigation ul li:first', function() {
    if($('.gosuslugi_intro_v1').hasClass('hide_image')&& $('.gosuslugi_intro_v2').hasClass('hide_image')&& $('.gosuslugi_intro_v3').hasClass('hide_image')) {
        console.log("v1");
        $('.hide_image.gosuslugi_intro_v1').toggleClass('hide_image show_image');}
    else if($('.gosuslugi_intro_v1').hasClass('show_image')) {
        console.log("v2");
        $('.show_image.gosuslugi_intro_v1').toggleClass('show_image hide_image');
        $('.gosuslugi_intro_v2').toggleClass('hide_image show_image');}
    else if($('.gosuslugi_intro_v2').hasClass('show_image')) {
        console.log("v3");
        $('.show_image.gosuslugi_intro_v2').toggleClass('show_image hide_image');
        $('.gosuslugi_intro_v3').toggleClass('hide_image show_image');}
    else $('.gosuslugi_intro_v3').toggleClass('hide_image show_image');
});