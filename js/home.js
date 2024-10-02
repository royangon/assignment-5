document.getElementById("flood-donate-noakhali").addEventListener("click", function (event) {
    event.preventDefault();
    const donation = getInputFieldValueByID('money');


    if (!isNaN(donation) && donation > 0) {
        const reserveMoney = getTextFieldValueById('reserve-field');
        console.log(reserveMoney)

        const updatedReserve = reserveMoney + donation

        document.getElementById("reserve-field").innerText = updatedReserve






    }
    else {
        alert("sorry! wrong input")
    }



})




document.getElementById("flood-donate-feni").addEventListener("click", function (event) {
    event.preventDefault()
    const donation2 = getInputFieldValueByID("money2");
    console.log(donation2)

    if (!isNaN(donation2) && donation2 > 0) {
        const reserveMoney2 = getTextFieldValueById("reserve-field-2");

        console.log(reserveMoney2)
        const updatedReserve2 = reserveMoney2 + donation2
        console.log(updatedReserve2)
        document.getElementById("reserve-field-2").innerText = updatedReserve2
    }

    else {
        alert("sorry! wrong input")
    }

})


document.getElementById("Quota").addEventListener("click", function (event) {
    event.preventDefault()
    const donation3 = getInputFieldValueByID("money3");
    console.log(donation3)

    if (!isNaN(donation3) && donation3 > 0) {
        const reserveMoney3 = getTextFieldValueById("reserve-field-3");

        console.log(reserveMoney3)
        const updatedReserve3 = reserveMoney3 + donation3
        console.log(updatedReserve3)
        document.getElementById("reserve-field-3").innerText = updatedReserve3
    }

    else {
        alert("sorry! wrong input")
    }

})






