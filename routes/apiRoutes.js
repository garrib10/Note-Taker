const router = require("express").Router();
const Notes = require("../db/Notes")


router.get("/notes", (req, res) => {
    Notes.getNotes().then(notesArray => res.json(notesArray))

})

router.post("/notes", (req,res) => {
   Notes.addNotes(req.body).then(notesArray => res.json(notesArray))
})

// Delete "api/notes"// 
router.delete("/notes/:id", (req, res) => {
    // See if the res.json is right or not// 
    Notes.deleteNotes(req.params.id).then(notesArray => res.json(notesArray))

});

module.exports = router;
