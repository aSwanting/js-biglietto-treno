//### Get user trip length in km
//- Prompt user to input trip length

function getTripLength() {
    const tripLength = prompt('Trip length in km')

    if (tripLength === "") {
        return alert('No input from user')
    }

    else if (tripLength === null) {
        return 
    }

    else if (isNaN(parseInt(tripLength))) {
        return alert('Input is not a number')
    }

    document.getElementById("tripLengthDOM").innerHTML = tripLength
}

//### Get user age
//- Prompt user to input age

function getUserAge() {
    const userAge = prompt('Trip length in km')

    if (userAge === "") {
        return alert('No input from user')
    }

    else if (userAge === null) {
        return 
    }

    else if (isNaN(parseInt(userAge))) {
        return alert('Input is not a number')
    }

    document.getElementById("userAgeDOM").innerHTML = userAge
}

//### Get ticket rate
//- Prompt user to input ticket rate

function getTicketRate() {
    const ticketRate = prompt('Ticket Rate in € / km')

    if (ticketRate === "") {
        return alert('No input from user')
    }

    else if (ticketRate === null) {
        return 
    }

    else if (isNaN(parseInt(ticketRate))) {
        return alert('Input is not a number')
    }

    document.getElementById("ticketRateDOM").innerHTML = ticketRate
}

//### Calculate final price
//- IF user is a minor apply 20% discount with tripBasePrice * 0.8
//- ELSE IF user is a senior apply 40% discount with tripBasePrice * 0.6
//- ELSE no discount

function getFinalPrice() {

    const tripLength = parseFloat(document.getElementById("tripLengthDOM").innerHTML) 
    console.log(tripLength + ' (' + typeof(tripLength) + ')')

    const userAge = parseFloat(document.getElementById("userAgeDOM").innerHTML)
    console.log(userAge + ' (' + typeof(userAge) + ')')

    const ticketRate = parseFloat(document.getElementById("ticketRateDOM").innerHTML)
    console.log(ticketRate + ' (' + typeof(ticketRate) + ')')

    const basePrice = tripLength * ticketRate

    let finalPrice
    let amountSaved

    if (userAge < 18) {
        finalPrice = basePrice * 0.8      
    }

    else if (userAge > 65) {
        finalPrice = basePrice * 0.6  
    }

    finalPrice = basePrice
    amountSaved = basePrice - finalPrice

    document.getElementById("basePriceDOM").innerHTML = basePrice.toFixed(2);
    document.getElementById("finalPriceDOM").innerHTML = finalPrice.toFixed(2);
    document.getElementById("amountSavedDOM").innerHTML = amountSaved.toFixed(2)

}

