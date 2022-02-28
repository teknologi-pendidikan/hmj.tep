/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const fetch = require("cross-fetch");

const API_ENDPOINT = "http://api.hmj.tep.my.id/api/data/berkas";

module.exports = {
  fetchBerkas: async function fetchBerkas() {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((json) => {
        try {
          fs.writeFileSync(
            "./src/data/berkas.json",
            JSON.stringify(json, null, 2)
          );
          console.info("Data saved to ./src/data/berkas.json");
        } catch (err) {
          console.error(err);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
