let fs = require('fs');
let file = fs.readFileSync('dataenter.json');
let jsonString = file.toString();
let jsobj = JSON.parse(jsonString);
for (let i = 0; i < jsobj.length; i++) {
    let { Id, Name, Salary } = jsobj[i];
    console.log(`Id: ${Id}, name: ${Name}, salary: ${Salary}`)
}