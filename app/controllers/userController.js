const mapper = require("../modules/dataMapper");

const userController = {
    homePage: async (req, res) => {
        const allData = await mapper.getAllData();

        console.log(req.session.panier);

        res.render("pages/home", { data: allData, counterPage: req.session.counterPage, panier: req.session.panier });
    },
    detail: async (req, res) => {
        const currentId = parseInt(req.params.id);
        const allData = await mapper.getAllData();

        const userFound = allData.find((element) => {
            return element.id === currentId;
        });

        if (userFound) {
            res.render("pages/userDetail", { user: userFound });
        } else {
            res.send("Il n'y a personne ici...");
        }
    },
    panierAdd: (req, res) => {
        req.session.panier.push({
            id: 23,
            name: "mon article",
        });
        res.send("Je suis là");
    },
};

module.exports = userController;
