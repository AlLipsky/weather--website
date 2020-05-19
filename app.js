// const fs = require('fs')
//  fs.writeFileSync('notes.txt','Changed')
// fs.appendFileSync('notes.txt', ' \n I just added some text')

// const add = require('./utils.js')

// const sum = add(2,3)
// const name = 'Alex'
// console.log(sum);
const notes = require('./notes')
// const myNotes = getNotes()
// console.log(myNotes)

// const validator = require('validator') 

// console.log(validator.isEmail('sss@gmail.com'));
// console.log(validator.isURL('https://www.udemy.com/'));


// const chalk = require('chalk')
// console.log(chalk.green.inverse("Success!"));

// console.log(process.argv);
// const command = process.argv[2]
//  if (command === "Alex"){
//      console.log('Your name is ' + command);

// } else {
//     console.log('not your name');

// }
// require('babel-register')

// import yargs from 'yargs'
const yargs = require('yargs')
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demand: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demand: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)

    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function () {
        console.log('listin notes');

    }
})
console.log(yargs.argv);

// const note = require('./notes.js')

// yargs.version('1.1.0')

// yargs.command({
//     command: 'add',
//     describe: 'add a new note',
//     builder: {
//         title: {
//             describe: 'note title',
//             demand: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'body',
//             demand: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {

//         note.addNote(argv.title, argv.body)

//     }
// })
yargs.command({
    command: 'remove',
    describe: 'removing note',
    builder: {
        title: {
            describe: 'removed note',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command: 'list',
    describe: 'list notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder:
    {
        title: {
            describe: 'read note',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse()

// console.log(process.argv);
// console.log(yargs.argv);

