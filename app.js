const express = require("express");
const app = express();
const port = 1234;

const userRoute = require("./app/routes/users");

// CONFIG
app.use(express.static("public"));
app.set("views", "./app/views");
app.set("view engine", "ejs");

// ROUTES
userRoute(app);

// LISTEN
app.listen(port, () => {
    console.log(`Le serveur écoute le port ${port}`);
});
