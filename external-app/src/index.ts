import express from "express";

console.log("hiya!");

const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!!");
});

app.listen(3000, () => {
    console.log("app started on port 3000")
});
