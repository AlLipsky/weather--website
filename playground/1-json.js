


const fs = require('fs');


const book = {

    title:'book',
    author:'me'
}



// const bookJson = JSON.stringify(book)
// console.log(bookJson);

// fs.writeFileSync('1-json.json', bookJson)

// const parsedData = JSON.parse(bookJson)
// console.log(parsedData.title);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Sender'
data.age= '34'
const dataToJson = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataToJson)
console.log(data);

