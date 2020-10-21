const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

// write file Asnyc needs to be fixed // 
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
    read() {
        return readFileAsync("db/db.json", "utf-8");
    }

    write(note) {
        return fs.writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getNotes(){
       return this.read().then(function(notes){
           var notesArray = [];

           try {
               notesArray = notesArray.concat(JSON.parse(notes))
           } catch (error) {
               notesArray = [];
           }

           return notesArray;
       })
    }

    addNotes(note){
        var randomNumber = Math.random() * 10;

        const newNote = {
            title: note.title,
            text: note.text,
            id: randomNumber
        }
     
     
        return this.getNotes().then(function(notesArray) {

           notesArray.push(newNote).then(function(updatedNotes){
               this.write(updatedNotes)
           })
     })
    }
}

module.exports = new Notes()