const fs = require("fs");
const path = require("path");

let template = fs.readFileSync(path.join(__dirname,"../template.html"), "utf8", (err, data) => {
  if (err) console.log(err);
  return data;
});

const data = {
  title: "My First Post",
  body: "This is my first post",
}

for(let [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value)
}

fs.writeFileSync('myTry.html', template, function(err) {
  if (err) throw err;
});
