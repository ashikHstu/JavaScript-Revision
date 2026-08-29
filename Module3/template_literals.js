// Math expression

let price = 500;
let quantity = 3;

// console.log(`Total price: ${price*quantity} taka\nPay the price to get it as your own`
// );

// function call

function getDiscount(price)
{
    return price*0.1; // 10 percent
}

let stock = 2;
console.log(`Status: ${stock>0?"In Stock "+ " " + stock:"Out of stock"}`)
console.log(`You saved: ${getDiscount(price)} taka\nYour total bill is now ${price*quantity-getDiscount(price)} taka.`)