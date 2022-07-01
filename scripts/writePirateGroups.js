const fs = require("fs").promises;
const axios = require("axios");
const path = require("path");

const fetchGraphData = async () => {
    try {
        const resp = await axios.get(`http://localhost:3000/api/pirates/all`);
        const data = JSON.stringify(resp.data);
        await fs.writeFile(path.join(__dirname, `../data/pirates.json`), data, "utf8");
        console.log(
            "\n Fetched and Wrote pirates.json to ./data/ \n"
        );
    } catch (err) {
        console.error(err);
    }
};

fetchGraphData();
