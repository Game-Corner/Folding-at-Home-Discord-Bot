const https = require("https");

async function request (endpoint, param = '') {
  console.log('ran')
  let result
  // The base URL for the F@H API end points
  https
    .get("https://stats.foldingathome.org/api/" + endpoint + param, (res) => {
      res.on("data", (d) => {
        result = JSON.parse(data);
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
  
    return result
}

module.exports = request
