const config = require("@shawnsandy/mix/config/tokens");

module.exports = config({
  source: ["tokens/**/*"], // tokens dir--/tokens/my-tokens.json
  build: "sass/_tokens/", // build dir trailing slash required--scss/_tokens.scss
  name: "_tokens" // name of you scss token output file--tokens.scss
});
