const express = require("express");
const session = require("express-session");
const app = express();
const port = 1234;

const userRoute = require("./app/routes/users");

// CONFIG
app.use(express.static("public"));
app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

// MIDDLEWARES
app.use((req, res, next) => {
    if (req.session.counterPage === undefined) {
        req.session.counterPage = 1;
    } else {
        req.session.counterPage = req.session.counterPage + 1;
    }
    // req.session.counterPage = req.session.counterPage === undefined ? 1 : req.session.counterPage + 1;
    next();
});

app.use((req, res, next) => {
    if (req.session.panier === undefined) {
        req.session.panier = [];
    }
    next();
});

// ROUTES
userRoute(app);

// LISTEN
app.listen(port, () => {
    console.log(`Le serveur écoute le port ${port}`);
});
