const inquirer = require('inquirer');

inquirer
.prompt(["What's up?"])
.then ((ans) => {
console.log(ans)})
.catch((err => {console.error(err)}))
