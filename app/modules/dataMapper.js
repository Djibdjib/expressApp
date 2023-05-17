const data = require("../data/data.json");

const mapper = {
    getAllData: async () => {
        return data;
    },
};

module.exports = mapper;
