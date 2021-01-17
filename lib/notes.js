//including fs so notes can be saved server side
const fs = require('fs');
//including path for file manipulation
const path = require('path');

//pushing note to db.json and saving file
async function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({notes: notesArray},null, 2)
    );
}
// removes the element of json file that has the note matching the id selected.
async function deleteById(id, notesArray) {
    let deleteId = id;
    for (let i = 0; i< notesArray.length; i++){
        if (notesArray[i].id == deleteId){
            notesArray.splice(i,1);
        }
    }
    //reissuing id numbers to match place in json
    for (let i = 0; i< notesArray.length; i++){
        notesArray[i].id = i;
    }
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({notes: notesArray},null, 2)
    )
}

module.exports = {
    createNewNote,
    deleteById
};