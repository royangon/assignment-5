document.getElementById("flood-donate-noakhali").addEventListener("click", function (event) {
    event.preventDefault();
    const donation = getInputFieldValueByID('money');


    if (!isNaN(donation) && donation > 0) {
        const reserveMoney = getTextFieldValueById('reserve-field');
        const myWallet = getTextFieldValueById('wallet')



        const updatedReserve = reserveMoney + donation
        const myBallance = myWallet - donation
        if (myBallance < 0) {
            alert("not enough money in your AC")
            return
        }
        else {
            document.getElementById("wallet").innerText = myBallance
            document.getElementById("reserve-field").innerText = updatedReserve
        }








    }
    else {
        alert("sorry! wrong input")
    }



})




document.getElementById("flood-donate-feni").addEventListener("click", function (event) {
    event.preventDefault()
    const donation2 = getInputFieldValueByID("money2");


    if (!isNaN(donation2) && donation2 > 0) {
        const reserveMoney2 = getTextFieldValueById("reserve-field-2");
        const myWallet = getTextFieldValueById('wallet')


        const updatedReserve2 = reserveMoney2 + donation2
        const myBallance = myWallet - donation2
        if (myBallance < 0) {
            alert("not enough money in your AC")
            return
        }
        else {
            document.getElementById("wallet").innerText = myBallance
            document.getElementById("reserve-field-2").innerText = updatedReserve2
        }








    }

    else {
        alert("sorry! wrong input")
    }

})


document.getElementById("Quota").addEventListener("click", function (event) {
    event.preventDefault()
    const donation3 = getInputFieldValueByID("money3");


    if (!isNaN(donation3) && donation3 > 0) {
        const reserveMoney3 = getTextFieldValueById("reserve-field-3");


        const updatedReserve3 = reserveMoney3 + donation3

        document.getElementById("reserve-field-3").innerText = updatedReserve3
    }

    else {
        alert("sorry! wrong input")
    }

})






