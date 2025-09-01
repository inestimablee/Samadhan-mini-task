const express = require("express");
const app = express();
const PORT = 3000;

let students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Amit" },
    { id: 4, name: "Sneha" }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(PORT, () => {
    console.log(Server running at http://localhost:${PORT});
});
