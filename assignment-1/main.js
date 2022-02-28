require("dotenv").config();
let snoowrap = require("snoowrap");

const api = new snoowrap({
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:10.0) Gecko/20100101 Firefox/10.0",
  clientId: process.env.USER_ID,
  clientSecret: process.env.USER_SECRET,
  refreshToken: process.env.USER_REFRESH,
});

let test = api.getSubreddit('TwoSentenceHorror')

console.log(test)