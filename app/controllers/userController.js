const mapper = require("../modules/dataMapper");

const userController = {
    homePage: async (req, res) => {
        const allData = await mapper.getAllData();

        res.render("pages/home", { data: allData });
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
};

module.exports = userController;
