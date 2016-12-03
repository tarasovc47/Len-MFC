var status = 0;
function show_how(num) {
    switch(num) {
        case 1:
        document.getElementsByClassName("hidden how")[0].style.display = "block";
        document.getElementsByClassName("hidden navigation")[0].style.display = "none";
        break;
        case 2:
        document.getElementsByClassName("hidden how")[0].style.display = "none";
        document.getElementsByClassName("hidden navigation")[0].style.display = "block";
        break;
    }
}
function arrows_up(num) {
    switch(num) {
        case 1:
        document.getElementsByClassName("more_info")[0].style.display = "block";
        document.getElementsByClassName("arrow_down")[0].style.transform = "rotate(-180deg)";
        status=1;
        break;
        case 2:
        document.getElementsByClassName("more_info")[1].style.display = "block";
        document.getElementsByClassName("arrow_down")[1].style.transform = "rotate(-180deg)";
        status=1;
        break;
        case 3:
        document.getElementsByClassName("more_info")[2].style.display = "block";
        document.getElementsByClassName("arrow_down")[2].style.transform = "rotate(-180deg)";
        status=1;
        break;
        case 4:
        document.getElementsByClassName("more_info")[3].style.display = "block";
        document.getElementsByClassName("arrow_down")[3].style.transform = "rotate(-180deg)";
        status=1;
        break;
        case 5:
        document.getElementsByClassName("more_info")[4].style.display = "block";
        document.getElementsByClassName("arrow_down")[4].style.transform = "rotate(-180deg)";
        status=1;
        break;
    }
}
function arrow_down_(num) {
    switch(num) {
        case 1:
        document.getElementsByClassName("more_info")[0].style.display = "none";
        document.getElementsByClassName("arrow_down")[0].style.transform = "rotate(0deg)";
        break;
        case 2:
        document.getElementsByClassName("more_info")[0,1,2,3,4].style.display = "none";
        document.getElementsByClassName("arrow_down")[0,1,2,3,4].style.transform = "rotate(0deg)";
        break;
        case 3:
        document.getElementsByClassName("more_info")[0,1,2,3,4].style.display = "none";
        document.getElementsByClassName("arrow_down")[0,1,2,3,4].style.transform = "rotate(0deg)";
        break;
        case 4:
        document.getElementsByClassName("more_info")[0,1,2,3,4].style.display = "none";
        document.getElementsByClassName("arrow_down")[0,1,2,3,4].style.transform = "rotate(0deg)";
        break;
        case 5:
        document.getElementsByClassName("more_info")[0,1,2,3,4].style.display = "none";
        document.getElementsByClassName("arrow_down")[0,1,2,3,4].style.transform = "rotate(0deg)";
        break;
    }
}