//### Get user trip length in km
//- Prompt user to input trip length

function getTripLength() {
    document.getElementById("tripLengthDOM").innerHTML = prompt('Trip length in km')
}

//### Get user age
//- Prompt user to input age

function getUserAge() {
    document.getElementById("userAgeDOM").innerHTML = prompt('User age in years')
}

//### Get ticket rate
//- Prompt user to input ticket rate

function getTicketRate() {
    document.getElementById("ticketRateDOM").innerHTML = prompt('Price per km in euros')
}

//### Calculate final price
//- IF user is a minor apply 20% discount with tripBasePrice * 0.8
//- ELSE IF user is a senior apply 40% discount with tripBasePrice * 0.6
//- ELSE no discount

function getFinalPrice() {

    const tripLength = document.getElementById("tripLengthDOM").innerHTML
    const userAge = document.getElementById("userAgeDOM").innerHTML
    const ticketRate = document.getElementById("ticketRateDOM").innerHTML
    const basePrice = tripLength * ticketRate
    let finalPrice
    let amountSaved

    if (userAge < 18) {
        finalPrice = basePrice * 0.8
        amountSaved = basePrice - finalPrice
    }
    else if (userAge > 65) {
        finalPrice = basePrice * 0.6
        amountSaved = basePrice - finalPrice
    } else {
        finalPrice = basePrice
        amountSaved = 0
    }

    document.getElementById("basePriceDOM").innerHTML = basePrice.toFixed(2);
    document.getElementById("finalPriceDOM").innerHTML = finalPrice.toFixed(2);
    document.getElementById("amountSavedDOM").innerHTML = amountSaved.toFixed(2)
}

