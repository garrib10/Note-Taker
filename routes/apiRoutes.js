const router = require("express").Router();
const Notes = require("../db/Notes")


router.get("/notes", (req, res) => {
    Notes.getNotes().then(notesArray => res.json(notesArray))

})

router.post("/notes", (req,res) => {
   Notes.addNotes(req.body).then(notesArray => res.json(notesArray))
})




module.exports = router;
