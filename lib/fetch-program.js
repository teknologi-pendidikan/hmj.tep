/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const fetch = require("cross-fetch");

const API_ENDPOINT = "http://api.hmj.tep.my.id/api/data/program";

module.exports = {
  fetchProgram: async function fetchProgram() {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((json) => {
        try {
          fs.writeFileSync(
            "./src/data/program.json",
            JSON.stringify(json, null, 2)
          );
          console.info("Data saved to ./src/data/program.json");
        } catch (err) {
          console.error(err);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
