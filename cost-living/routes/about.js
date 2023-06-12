//Omer Norman - 206729873
//Nissim Cohen - 308152537
const express = require("express");
const router = express.Router();

/* GET - about page. */
router.get('/', function (req, res) {
    const aboutJson = [
        {
            'firstname': 'Omer',
            'lastname': 'Norman',
            'id': '206729873',
            'email': 'omer.norman1@gmail.com'
        },
        {
            'firstname': 'Nissim',
            'lastname': 'Cohen',
            'id': '308152537',
            'email': 'nisim5070@gmail.com'
        }
    ];
    // The response will be a JSON object containing the aboutJson object.
    res.json(aboutJson);
});

module.exports = router;