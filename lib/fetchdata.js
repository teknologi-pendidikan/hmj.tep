/* eslint-disable @typescript-eslint/no-var-requires */
const fetchBerkas = require("./fetch-berkas");
const fetchPengurus = require("./fetch-pengurus");
const fetchEokeluar = require("./fetch-eofficekeluar");
const fetchProgram = require("./fetch-program");

(function fetchData() {
  console.info("Fetching data...");

  fetchBerkas.fetchBerkas();
  fetchPengurus.fetchPengurus();
  fetchEokeluar.fetchEokeluar();
  fetchProgram.fetchProgram();
})();
