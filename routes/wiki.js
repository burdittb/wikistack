const express = require("express");
const router = express.Router();
const { db, Page } = require("../models");
const { addPage } = require("../views");
const { wikipage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.post("/", async (req, res, next) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const page = await Page.create({
      title: title,
      content: content,
    });
    const slug = page.slug;
    res.redirect(`/wiki/${slug}`);
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

router.get("/:slug", async (req, res, next) => {
  try {
    const foundPage = await Page.findOne({ where: { slug: req.params.slug } });
    console.log(wikipage);
    res.send(wikipage(foundPage, "Shirley"));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
