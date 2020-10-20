var path = require("path");
const router = require("express").Router();

// ===============================================================================
// ROUTING
// ===============================================================================


    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    router.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // If no matching route is found default to home
    router.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    module.exports = router
