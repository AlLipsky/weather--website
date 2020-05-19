const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => {
        return note.title === title

    })

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('note added'))


    }
    else console.log(chalk.red.inverse('note exists'))


    //     debugger

    //     if (!duplicateNote) {
    //         notes.push({

    //             title: title,
    //             body: body

    //         })
    // saveNotes(notes)
    //         console.log(chalk.green.inverse('new note added'));


    //     } else {
    //         console.log(chalk.red.inverse('note exists'));

    //     }

}

const removeNote = (title) => {

    const notes = loadNotes()

    const filteredNotes = notes.filter((note) => note.title !== title)
    if (notes.length != filteredNotes.length) {
        console.log(chalk.green.inverse(`file with title ${title} is removed`));
        saveNotes(filteredNotes)
    }
    else console.log(chalk.red.inverse('no notes found'));
}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch (e) {
        return []
    }
}
const listNotes = () => {

    const notes = loadNotes()
    console.log(notes.forEach(note => console.log(note.title)))

}

// const listNotes = () => {
//     const notes = loadNotes()
//     notes.forEach(note => console.log(chalk.green.inverse('note titile is ' + note.title)))
// }
 
const readNote = (title) => {

    const notes = loadNotes()

    const foundNote = notes.find(note => note.title === title)

    if (foundNote) {
        console.log(chalk.green.inverse(foundNote.title))
        console.log(foundNote.body);

    }
    else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}


module.exports = {

    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}