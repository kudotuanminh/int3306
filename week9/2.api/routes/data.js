var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    var data = [
        {
            name: "John",
            age: 30,
            cars: [
                { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
                { name: "BMW", models: ["320", "X3"] },
            ],
        },
        {
            name: "Maria",
            age: 25,
            cars: [{ name: "Fiat", models: ["500", "Panda"] }],
        },
        {
            name: "David",
            age: 40,
            cars: [
                { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
                { name: "BMW", models: ["320", "X3", "X5"] },
                { name: "Fiat", models: ["500", "Panda"] },
            ],
        },
    ];

    res.status(200).json(data);
});

module.exports = router;
