function view_new_case() {
    if (document.getElementById("view_new_case").onclick) {
        document.getElementById("img_new_case").style.display = "block";
    }
}
function view_d_choose_responsible() {
    if (document.getElementById("view_d_choose_responsible").onclick) {
        document.getElementById("img_d_choose_responsible").style.display = "block";
    }
}
function view_d_fill_data_in_ais() {
    if (document.getElementById("view_d_fill_data_in_ais").onclick) {
        document.getElementById("img_d_fill_data_in_ais").style.display = "block";
    }
}
function view_d_registering_case() {
    if (document.getElementById("view_d_registering_case").onclick) {
        document.getElementById("img_d_registering_case").style.display = "block";
    }
}
function view_d_send_inquiry(num) {
    switch(num)
    {
        case 1:
        document.getElementById("img_d_send_inquiry1").style.display = "block";
        break;
        case 2:
        document.getElementById("img_d_send_inquiry1").style.display = "none";
        document.getElementById("img_d_send_inquiry2").style.display = "block";
        break;
        case 3:
        document.getElementById("img_d_send_inquiry2").style.display = "none";
        document.getElementById("img_d_send_inquiry3").style.display = "block";
        break;
        case 4: 
        document.getElementById("img_d_send_inquiry3").style.display = "none";
        document.getElementById("img_d_send_inquiry1").style.display = "block";
        break;
    }
}
function view_var_see_pdf(num) {
    switch(num) 
    {
        case 1:
        document.getElementById("img_var_see_pdf1").style.display = "block";
        break;
        case 2: 
        document.getElementById("img_var_see_pdf1").style.display = "none";
        document.getElementById("img_var_see_pdf2").style.display = "block";
        break;
        case 3: 
        document.getElementById("img_var_see_pdf2").style.display = "none";
        document.getElementById("img_var_see_pdf1").style.display = "block";
    }
}