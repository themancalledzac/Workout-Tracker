// our required npm packages
const express = require("express");
// logger everytime we do a request
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

// process dynamic data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static file directory
app.use(express.static("public"));

// connection to mongoose for local development
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app
    .use(require("./routes/html.js"))
    .use(require("./routes/api.js"));





app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
