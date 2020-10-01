const express = require("express");
const morgan = require("morgan");
const app = express();
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki.js");
const usersRouter = require("./routes/users.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use("/wiki", wikiRouter);

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const PORT = 3000;

async function modelSync() {
  await db.sync();

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

modelSync();
