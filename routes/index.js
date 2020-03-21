const express = require("express");
const home = require("./home");

module.exports = (app) => {
    app.use(express.json());
    app.use("/", home);
};