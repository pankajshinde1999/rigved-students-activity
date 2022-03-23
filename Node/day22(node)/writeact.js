let fs = require("fs");
let read = require("readline-sync");

let Id = read.question("enter Id : ");
let Name = read.question("enter Name : ");
let Salary = read.question("enter Salary : ");


let myobj = Object.assign({ Id, Name, Salary });
let jsonString = JSON.stringify(myobj);

let data = fs.readFileSync(`dataenter.json`).toString();

if (data.endsWith('}]') == true) {
    let data1 = data.slice(0, (data.length - 1))
    let data2 = `${data1},\n${jsonString}]`
    fs.writeFileSync(`dataenter.json`, data2);
    console.log(`done..!`)
}
else {
    let data2 = `[${jsonString}]`
    fs.writeFileSync('dataenter.json', data2);
    console.log(`done..!`);

}