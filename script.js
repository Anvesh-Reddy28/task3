const express = require("express");
const app = express();

let arr = [
  { id: 18, title: "king", author: "anvesh" },
  { id: 2, title: "powerstar", author: "pk" },
];

app.use(express.json());

app.get("/getbook", (req, res) => {
  res.json(arr);
});

app.post("/new", (req, res) => {
  arr.push({ id: 2, title: "powerstar", author: "pk" });
  res.send("add successful");
});

app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { newId } = req.body;
  const book = arr.find((u) => u.id === id);
  if (!book) {
    return res.status(400).json({ message: "book not found" });
  }

  book.id = newId;

  res.send("updaate successfull");
});

app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);

  arr = arr.filter((book) => book.id != id);
  res.send("delete successful");
});

app.listen("3000", (req, res) => {
  console.log("server woring well");
});
