var status=0;
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
    if(status==0) {
        $(".more_info:eq(0)").css("display","block");
        $(".arrow_down:eq(0)").css("transform","rotate(-180deg)");
        status=1;
    }
    else if (status==1) {
        $(".more_info:eq(0)").css("display","none");
        $(".arrow_down:eq(0)").css("transform","rotate(-360deg)");
        status=0;
    }
}
function second_arrows_rotate(){
    if(status==0) {
        $(".more_info:eq(1)").css("display","block");
        $(".arrow_down:eq(1)").css("transform","rotate(-180deg)");
        status=1;
    }
    else if (status==1) {
        $(".more_info:eq(1)").css("display","none");
        $(".arrow_down:eq(1)").css("transform","rotate(-360deg)");
        status=0;
    }
}
function third_arrows_rotate(){
    if(status==0) {
        $(".more_info:eq(2)").css("display","block");
        $(".arrow_down:eq(2)").css("transform","rotate(-180deg)");
        status=1;
    }
    else if (status==1) {
        $(".more_info:eq(2)").css("display","none");
        $(".arrow_down:eq(2)").css("transform","rotate(-360deg)");
        status=0;
    }
}
function fourth_arrows_rotate(){
    if(status==0) {
        $(".more_info:eq(3)").css("display","block");
        $(".arrow_down:eq(3)").css("transform","rotate(-180deg)");
        status=1;
    }
    else if (status==1) {
        $(".more_info:eq(3)").css("display","none");
        $(".arrow_down:eq(3)").css("transform","rotate(-360deg)");
        status=0;
    }
}
function fifth_arrows_rotate(){
    if(status==0) {
        $(".more_info:eq(4)").css("display","block");
        $(".arrow_down:eq(4)").css("transform","rotate(-180deg)");
        status=1;
    }
    else if (status==1) {
        $(".more_info:eq(4)").css("display","none");
        $(".arrow_down:eq(4)").css("transform","rotate(-360deg)");
        status=0;
    }
}
/*var status = 0;
function show(num) {
    switch(num) {
        case 1:
        document.getElementsByClassName("hidden how")[0].style.display = "block";
        document.getElementsByClassName("main how")[0].style.background = "#f7605b";
        document.getElementsByClassName("main navigation")[0].style.background = "rgba(108, 107, 198, 0.3)";
        document.getElementsByClassName("hidden navigation")[0].style.display = "none";
        break;
        case 2:
        document.getElementsByClassName("hidden how")[0].style.display = "none";
        document.getElementsByClassName("main navigation")[0].style.background = "#f7605b";
        document.getElementsByClassName("main how")[0].style.background = "rgba(108, 107, 198, 0.3)";
        document.getElementsByClassName("hidden navigation")[0].style.display = "block";
        break;
    }
}
function first_arrows_rotate(num) {
    if (status==0) {
        document.getElementsByClassName("more_info")[0].style.display = "block";
        document.getElementsByClassName("arrow_down")[0].style.transform = "rotate(-180deg)";
        status=1;
    }
    else if (status==1) {
        document.getElementsByClassName("more_info")[0].style.display = "none";
        document.getElementsByClassName("arrow_down")[0].style.transform = "rotate(0deg)";
        status=0;
    }
}
function second_arrows_rotate(num) {
    if (status==0) {
        document.getElementsByClassName("more_info")[1].style.display = "block";
        document.getElementsByClassName("arrow_down")[1].style.transform = "rotate(-180deg)";
        status=1;
    }
    else if (status==1) {
        document.getElementsByClassName("more_info")[1].style.display = "none";
        document.getElementsByClassName("arrow_down")[1].style.transform = "rotate(0deg)";
        status=0;
    }
}
function third_arrows_rotate(num) {
    if (status==0) {
        document.getElementsByClassName("more_info")[2].style.display = "block";
        document.getElementsByClassName("arrow_down")[2].style.transform = "rotate(-180deg)";
        status=1;
    }
    else if (status==1) {
        document.getElementsByClassName("more_info")[2].style.display = "none";
        document.getElementsByClassName("arrow_down")[2].style.transform = "rotate(0deg)";
        status=0;
    }
}
function fourth_arrows_rotate(num) {
    if (status==0) {
        document.getElementsByClassName("more_info")[3].style.display = "block";
        document.getElementsByClassName("arrow_down")[3].style.transform = "rotate(-180deg)";
        status=1;
    }
    else if (status==1) {
        document.getElementsByClassName("more_info")[3].style.display = "none";
        document.getElementsByClassName("arrow_down")[3].style.transform = "rotate(0deg)";
        status=0;
    }
}
function fifth_arrows_rotate(num) {
    if (status==0) {
        document.getElementsByClassName("more_info")[4].style.display = "block";
        document.getElementsByClassName("arrow_down")[4].style.transform = "rotate(-180deg)";
        status=1;
    }
    else if (status==1) {
        document.getElementsByClassName("more_info")[4].style.display = "none";
        document.getElementsByClassName("arrow_down")[4].style.transform = "rotate(0deg)";
        status=0;
    }
}*/