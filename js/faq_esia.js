function clearAll(){
        for(i=0; i < document.getElementsByTagName('DIV').length; i++)
        {
            document.getElementsByTagName('DIV')[i].style.display = "none";
        } 
        for(i=0; i < document.getElementsByTagName('LABEL').length; i++)
        {
            document.getElementsByTagName('LABEL')[i].style.display = "none";
        }
        for(i=0; i < document.getElementsByTagName('INPUT').length; i++)
        {
            document.getElementsByTagName('INPUT')[i].style.display = "none";
        }
}
function allRight() {
    if (document.getElementById("radio_d_complete_by_procedure").checked) {
            clearAll();
            document.getElementById("reset_button").style.display = "block";
    }
}
/*
document.getElementById("").style.display = "block";
document.getElementById("").style.display = "none";
*/

function one() {//есть пасппорт и снилс
    if (document.getElementById("radio_y_have_passport_and_snils").checked) {
            clearAll();
            document.getElementById("yn_passport_and_snils_match").style.display = "block";
            document.getElementById("y_passport_and_snils_match").style.display = "block";
            document.getElementById("n_passport_and_snils_match").style.display = "block";
    }
    else if (document.getElementById("radio_n_have_passport_and_snils").checked) {
        clearAll();
        document.getElementById("d_dos").style.display = "block";
        document.getElementById("reset_button").style.display = "block";
    }
}
function two() {//пасппорт и снилс совпадают
    if (document.getElementById("radio_y_passport_and_snils_match").checked) {
            clearAll();
            document.getElementById("var_which_service").style.display = "block";
            document.getElementById("d_service_registration").style.display = "block";
            document.getElementById("d_service_confirmation").style.display = "block";
            document.getElementById("d_service_recovery").style.display = "block";
    }
    else if (document.getElementById("radio_n_passport_and_snils_match").checked) {
        clearAll();
        document.getElementById("d_dos").style.display = "block";
        document.getElementById("reset_button").style.display = "block";
    }
}
function three() {//какая услуга в талоне?
    if (document.getElementById("radio_d_service_registration").checked) {
            clearAll();
            document.getElementById("yn_have_account").style.display = "block";
            document.getElementById("y_have_account").style.display = "block";
            document.getElementById("n_have_account").style.display = "block";
    }
    else if (document.getElementById("d_service_confirmation").checked) {
        clearAll();
        document.getElementById("d_digital_signature").style.display = "block";
    }
    else if (document.getElementById("d_service_recovery").checked) {
        clearAll();
        document.getElementById("d_new_service_recovery").style.display = "block";
    }
}
function four() {//у меня есть аккаунт_дн
    if (document.getElementById("radio_y_have_account").checked) {
            clearAll();
            document.getElementById("d_new_service_recovery").style.display = "block";
            document.getElementById("d_new_service_recovery_ok").style.display = "block";
    }
    else if (document.getElementById("radio_n_have_account").checked) {
        clearAll();
        document.getElementById("d_new_service_registration").style.display = "block";
    }
}
function five() {//услуга подтверждения -> ЭЦП //после неудачного восстановления -> ЭЦП
    if (document.getElementById("radio_d_service_confirmation").checked) {
            clearAll();
            document.getElementById("d_digital_signature").style.display = "block";
            document.getElementById("d_digital_signature_success").style.display = "block"
            document.getElementById("d_digital_signature_have_a_confirmed_account").style.display = "block"
            document.getElementById("d_digital_signature_not_found").style.display = "block"
    }
    else if (document.getElementById("radio_var_see_pdf_user_not_confirmed").checked) {
            clearAll();
            document.getElementById("d_digital_signature_after_recovery").style.display = "block";
            document.getElementById("d_digital_signature_after_recovery_success").style.display = "block"
            document.getElementById("d_digital_signature_after_recovery_have_a_confirmed_account").style.display = "block"
            document.getElementById("d_digital_signature_after_recovery_not_found").style.display = "block"
    }
}
function six() {//услуга восстановления -> новое дело на восстановление //в пдф "уже есть подтверждённый аккаунт" -> новое дело на восстановление
    if (document.getElementById("radio_d_service_recovery").checked) {
            clearAll();
            document.getElementById("d_new_service_recovery").style.display = "block";
            document.getElementById("d_new_service_recovery_ok").style.display = "block";
    }
    else if (document.getElementById("radio_var_see_pdf_have_a_confirmed_account").checked) {
            clearAll();
            document.getElementById("d_new_service_recovery").style.display = "block";
            document.getElementById("d_new_service_recovery_ok").style.display = "block";
    }
    else if (document.getElementById("radio_d_digital_signature_have_a_confirmed_account").checked) {
        clearAll();
        document.getElementById("d_new_service_recovery").style.display = "block";
        document.getElementById("d_new_service_recovery_ok").style.display = "block";
    }
}
function seven() {//у меня нет аккаунта -> новое дело на регистрацию
    if (document.getElementById("radio_n_have_account").checked) {
            clearAll();
            document.getElementById("d_new_service_registration").style.display = "block";
            document.getElementById("d_new_service_registration_ok").style.display = "block";
    }
}
function eight() {//новое дело на регистрацию -> выбираем ответственного
    if (document.getElementById("radio_d_new_service_registration").checked) {
        clearAll();
        document.getElementById("d_choose_responsible").style.display = "block";
        document.getElementById("d_choose_responsible_ok").style.display = "block";
    }
    else if (document.getElementById("radio_d_new_service_recovery").checked) {
        clearAll();
        document.getElementById("d_choose_responsible").style.display = "block";
        document.getElementById("d_choose_responsible_ok").style.display = "block";
    }
}
function nine() {//выбрали ответственного -> вносим данные в АИС
    if (document.getElementById("radio_d_choose_responsible").checked) {
            clearAll();
            document.getElementById("d_fill_data_in_ais").style.display = "block";
            document.getElementById("d_fill_data_in_ais_ok").style.display = "block";
    }
}
function ten() {//внесли данные в АИС -> регистрируем дело
    if (document.getElementById("radio_d_fill_data_in_ais").checked) {
            clearAll();
            document.getElementById("d_registering_case").style.display = "block";
            document.getElementById("d_registering_case_ok").style.display = "block";
    }
}
function eleven() {//зарегистрировали дело -> отправляем запрос
    if (document.getElementById("radio_d_registering_case").checked) {
            clearAll();
            document.getElementById("d_send_inquiry").style.display = "block";
            document.getElementById("d_send_inquiry_ok").style.display = "block";
    }
}
function twelve() {// отправили запрос -> что в пдф?
    if (document.getElementById("radio_d_send_inquiry").checked) {
            clearAll();
            document.getElementById("var_see_pdf").style.display = "block";
            document.getElementById("var_see_pdf_operation_success").style.display = "block";
            document.getElementById("var_see_pdf_specified_mobile").style.display = "block";
            document.getElementById("var_see_pdf_have_a_confirmed_account").style.display = "block";
            document.getElementById("var_see_pdf_bgir").style.display = "block";
            document.getElementById("var_see_pdf_user_not_confirmed").style.display = "block";
            document.getElementById("var_see_pdf_data_is_checked").style.display = "block";
            
    }
}
function thirteen() {//ответ в пдф "операция успешна" -> завершаем через процедуры
    if (document.getElementById("radio_var_see_pdf_operation_success").checked) {
            clearAll();
            document.getElementById("d_complete_by_procedure").style.display = "block";
            document.getElementById("d_complete_by_procedure_ok").style.display = "block";
            document.getElementById("reset_button").style.display = "block";
    }
}
function fourteen() {//указанный телефон... -> ничего страшного, жди еще одну пдф
    if (document.getElementById("radio_var_see_pdf_specified_mobile").checked) {
            clearAll();
            document.getElementById("var_see_pdf").style.display = "block";
            document.getElementById("d_no_fear").style.display = "block";
    }
}
function fifteen() {//ответ в пдф "уже есть подтверждённый аккаунт" -> копируем карточку участника
    if (document.getElementById("radio_var_see_pdf_have_a_confirmed_account").checked) {
            clearAll();
            document.getElementById("var_see_pdf").style.display = "block";
            document.getElementById("d_copy_card_after_registration").style.display = "block";
    }
}
function sixteen() {//в пдф "бгир" -> сверяем все данные (варианты "ok" и "fix")
    if (document.getElementById("radio_var_see_pdf_bgir").checked) {
            clearAll();
            document.getElementById("var_see_pdf").style.display = "block";
            document.getElementById("var_check_data_ok").style.display = "block";
            document.getElementById("var_check_data_fix").style.display = "block";
    }
}
function seventeen() {//в карточке ошибок нет -> звоните в IT
    if (document.getElementById("radio_var_check_data_ok").checked) {
            clearAll();
            document.getElementById("d_help_4099").style.display = "block";
            document.getElementById("reset_button").style.display = "block";
    }
}
function eighteen() {//в карточке найдены ошибки -> исправляй
    if (document.getElementById("radio_var_check_data_fix").checked) {
            clearAll();
            document.getElementById("var_see_pdf").style.display = "block";
            document.getElementById("d_fix_user_card").style.display = "block";
            document.getElementById("d_fix_user_card_ok").style.display = "block";
    }
}
function nineteen() {//карточка участника исправлена -> отправить запрос
    if (document.getElementById("radio_d_fix_user_card").checked) {
            clearAll();
            document.getElementById("d_send_inquiry").style.display = "block";
            document.getElementById("d_send_inquiry_ok").style.display = "block";
    }
}
function twenty() {// подтверждение через ЭЦП успешно -> можно завершать обслуживание
    if (document.getElementById("radio_d_digital_signature_success").checked) {
            clearAll();
            document.getElementById("d_complete_by_procedure").style.display = "block";
            document.getElementById("d_complete_by_procedure_ok").style.display = "block";
            document.getElementById("reset_button").style.display = "block";
    }
}
function twenty_one() {//ничего страшного -> что в пдф?
    if (document.getElementById("radio_d_no_fear").checked) {
            clearAll();
            document.getElementById("var_see_pdf").style.display = "block";
            document.getElementById("var_see_pdf_operation_success").style.display = "block";
            document.getElementById("var_see_pdf_specified_mobile").style.display = "block";
            document.getElementById("var_see_pdf_have_a_confirmed_account").style.display = "block";
            document.getElementById("var_see_pdf_bgir").style.display = "block";
            document.getElementById("var_see_pdf_user_not_confirmed").style.display = "block";
            document.getElementById("var_see_pdf_data_is_checked").style.display = "block";
    }
}
function twenty_two() {//после подтверждения через ЭЦП возвращаемся к восстановлению
    if (document.getElementById("radio_d_digital_signature_after_recovery_success").checked) {
            clearAll();
            document.getElementById("d_send_inquiry").style.display = "block";
            document.getElementById("d_send_inquiry_ok").style.display = "block";
    }
}
function twenty_three() {//через ЭЦП учетка не найдена -> есть ранее выданные паспорта
    if (document.getElementById("radio_d_digital_signature_not_found").checked) {
            clearAll();
            document.getElementById("yn_previously_issued_passports").style.display = "block";
            document.getElementById("y_previously_issued_passports").style.display = "block";
            document.getElementById("n_previously_issued_passports").style.display = "block";
    }
}
function twenty_four() {//Есть ранее выданные паспорта -> пробуем подтвердить через ЭЦП по старым паспортам
    if (document.getElementById("radio_y_previously_issued_passports").checked) {
            clearAll();
            document.getElementById("yn_try_the_previous_passport").style.display = "block";
            document.getElementById("y_try_the_previous_passport").style.display = "block";
            document.getElementById("n_try_the_previous_passport").style.display = "block";
    }
}
function twenty_five() {//нет ранее выданых паспортов -> отправляем на регистрацию
    if (document.getElementById("radio_n_previously_issued_passports").checked) {
            clearAll();
            document.getElementById("d_new_service_registration").style.display = "block";
            document.getElementById("d_new_service_registration_ok").style.display = "block";
    }
}
function twenty_six() {//после подтверждения по ЭЦП старого паспорта отправляем на восстановление
    if (document.getElementById("radio_y_try_the_previous_passport").checked) {
            clearAll();
            document.getElementById("d_new_service_recovery").style.display = "block";
            document.getElementById("d_new_service_recovery_ok").style.display = "block";
    }
}
function twenty_seven() {//ни один из паспортов по ЭЦП не подтвердился -> отправляем на регистрацию
    if (document.getElementById("radio_n_try_the_previous_passport").checked) {
            clearAll();
            document.getElementById("d_new_service_registration").style.display = "block";
            document.getElementById("d_new_service_registration_ok").style.display = "block";
    }
}
function twenty_eight() {//восстановление не нашло пользователя -> отправляем на регистрацию
    if (document.getElementById("radio_var_see_pdf_user_not_found").checked) {
            clearAll();
            document.getElementById("d_new_service_registration").style.display = "block";
            document.getElementById("d_new_service_registration_ok").style.display = "block";
    }
}
function twenty_nine() {//в пдф "идет проверка данных БГИР" -> что в пдф?
    if (document.getElementById("radio_var_see_pdf_data_is_checked").checked) {
        clearAll();
        document.getElementById("var_see_pdf").style.display = "block";
        document.getElementById("d_no_fear").style.display = "block";
    }
}