const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

const user = (app) => {
    router.get("/", controller.homePage);
    router.get("/user/:id", controller.detail);
    router.get("/panier/add", controller.panierAdd);

    app.use(router);
};

module.exports = user;
