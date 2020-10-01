const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.post("/", async (req, res, next) => {
  const title = res.json(req.body.title);
  const content = res.json(req.body.content);
  try {
    const page = await Page.create({
      title: title,
      content: content,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
