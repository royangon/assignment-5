
function getInputFieldValueByID(id){
    const donateMoney = document.getElementById(id).value;
    const donateAmount = Number(donateMoney);
    return donateAmount;
}
function getTextFieldValueById(id){
    const reserve = document.getElementById(id).innerText;
    const reserveAmount = Number(reserve);
    return reserveAmount


}
