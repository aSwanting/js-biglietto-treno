//### Get user trip length in km
//- Prompt user to input trip length
//- Store in variable 'tripLength'

const tripLength = prompt('Trip length in km')
console.log('Trip length = ' + tripLength + 'km')

//### Get user age
//- Prompt user to input age
//- Store in variable 'userAge'

const userAge = prompt('User age')
console.log('User is ' + userAge + ' years old')

//### Calculate base price
//- Calculate price 'tripBasePrice' = 'trip-length' * 0.21 

const basePrice = tripLength * .21
console.log('Base trip price = ' + basePrice + ' euros')

//### Calculate final price
//- IF user is a minor apply 20% discount with tripBasePrice * 0.8
//- ELSE IF user is a senior apply 40% discount with tripBasePrice * 0.6
//- ELSE no discount

function getFinalPrice() {
    if (userAge < 18) {
        return basePrice * 0.8
    }
    else if (userAge > 65) {
        return basePrice * 0.6
    } else {
        return basePrice
    }
}

console.log('Final trip price = ' + getFinalPrice() + ' euros')