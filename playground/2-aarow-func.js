setTimeout(() => {
    console.log('hi')

}, 2000)

const names = ['Alex', 'Petr', 'Fredy']
const shortNames = names.filter(
    name => {
        return name.length <= 4
    }
)
console.log(shortNames);

const geocode = (address, callback) => {

    const data = {
        longtitude: 0,
        latitude: 0
    }
}

//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add = (a, b, callback) =>{
    setTimeout(() =>{
    const sum = a+b
    callback(sum)
    }, 2000)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
