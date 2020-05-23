const https = require("https");



function request (endpoint, param = '') {
  // The base URL for the F@H API end points
  https
    .get("https://stats.foldingathome.org/api/" + endpoint + param, (res) => {
      res.on("data", (d) => {
          console.log('got')
        return JSON.parse(data);
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
}

module.exports = request
