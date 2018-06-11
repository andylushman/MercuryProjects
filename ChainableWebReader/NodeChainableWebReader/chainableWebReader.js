const request = require('request-promise');

const github = {
  token: null,
  
  getUser: () => {
    return request({
        "method":"GET", 
        "uri": "https://api.github.com/users/andylushman",
        "json": true,
        "headers": {
            "Authorization": "andylushman" + github.token,
            "User-Agent": "My little demo app"
      }
    });
  },
  
  getUserReposUrl: (user) => {
    return user.repos_url;
  },
  
  getUserRepos: (uri, repos) => {
    return request({
      "method": "GET",
      "uri": uri,
      "json": true,
      "resolveWithFullResponse": true,
      "headers": {
        "Authorization": "andylushman" + github.token,
        "User-Agent": "My little demo app"
      }
    }).then((response) => {
      if (!repos) {
        repos = [];
      }
      repos = repos.concat(response.body);
      console.log(repos.length + " repos so far");
      
      if (response.headers.link.split(",").filter((link) => { return link.match(/rel="next"/) }).length > 0) {
        console.log("There is more.");
        const next = new RegExp(/<(.*)>/).exec(response.headers.link.split(",").filter((link) => { return link.match(/rel="next"/) })[0])[1];
        return github.getUserRepos(next, repos);
      }
      return repos;
    });
  },
  
  isPublic: (repo) => {
    return !repo.private;
  },
  
  isOriginal: (repo) => {
    return !repo.fork;
  },
  
  licenseUrl: (repo) => {
    return repo.contents_url.replace(/\{\+path\}/,"LICENSE");
  },
  
  checkLicense: (uri) => {
    return request({
      "method": "GET",
      "uri": uri,
      "json": true,
      "headers": {
        "Authorization": "andylushman" + github.token,
        "User-Agent": "My little demo app"
      }
    }).then((fulfilled_body) => {
      return false;
    }, (rejected_body) => {
      return uri;
    });
  },
  
  isMissing: (license) => {
    return license;
  },
  
  createLicenseLink: (license) => {
    return license.replace(/https:\/\/api.github.com\/repos\/(.*)\/(.*)\/contents\/LICENSE/, "https://github.com/$1/$2/new/master?filename=LICENSE");
  }
}

function main(params) {
  github.token = params.token;
  return github.getUser()
    .then(github.getUserReposUrl)
    .then(github.getUserRepos)
    .filter(github.isPublic)
    .filter(github.isOriginal)
    .map(github.licenseUrl)
    .map(github.checkLicense)
    .filter(github.isMissing)
    .map(github.createLicenseLink);
}

main({"token": process.argv[2]}).then((result) => {
  console.log(result);
});