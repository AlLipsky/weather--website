// Object property shorthand

const name = 'Alex';
const age = '35';

const user = {
    name,
    age,
    location: 'Jerusalem'
}

console.log(user);

// Object destructuring

const product = {
    
    price:100,
    type: 'phone',
    area: 'electronics'
}

// const price = product.price;
// const type = product.type;

const {price: myPrice, type, rating = 5} = product;
// console.log(myPrice, type, rating);

const transaction = (myType, {price, type}) => {

    console.log(myType, price, type);
    
}

transaction('order', product)
