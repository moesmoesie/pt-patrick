var glob = require("glob");
var fs = require("fs");

glob("lib/**/schema.{ts,tsx}", function (er, files) {
  var content = files.map((el, index) => {
    return `export { default as schema${index} } from "./${el.substring(
      0,
      el.lastIndexOf(".")
    )}";`;
  });

  content = content.join("\n");

  fs.writeFile("schemas.ts", content, function () {
    console.log("done");
  });
});
