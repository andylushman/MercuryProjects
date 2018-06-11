
var request = require('request-promise');

var github = {
  token: "23f7075b48043e8cc43084098100650e82c8f1d9",
  
  getUser: function() {
    return request({
      "method":"GET", 
      "uri": "https://api.github.com/andylushman",
      "json": true,
      "headers": {
        "Authorization": "Bearer " + github.token,
        "User-Agent": "My little demo app"
      }
    });
  }
}

function main(params) {
  github.token = params.token;
  return github.getUser();
}

main({"token": process.argv[2]}).then(function(result) {
  console.log(result);
});