// const square = function (x) {
//     return x*x
// }



// const square = (x) => {
//    return x*x
// } 

const square = (x) => x * x

console.log(square(3))


// const event = {

//     name: 'Party',
//     guestList: ['a', 'b', 'c'],
//     printGuestList() {
//         const that = this;
//         console.log('guest list for ' + this.name);
//         this.guestList.forEach(function (guest) {
//             console.log(guest + ' is attend ' + that.name);
//         })
//     }
// }

const event = {

    name: 'Party',
    guestList: ['a', 'b', 'c'],
    printGuestList() {
        console.log('guest list for ');
        this.guestList.forEach((guest) => console.log(guest + ' is attend ' + this.name))
       
    }
}
event.printGuestList()