const express = require("express");
const app = express();
const port = 8080;
const Route = require("./Route");
const onePageArticleCount = 10;
//const { newsArticleModel } = require("./connector");

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/newFeeds",Route);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
