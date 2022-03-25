let fs = require("fs");
let data = fs.readFileSync("data1.json");
let dataString = data.toString();
let jsArray = undefined;
if (dataString.length < 1 || dataString == "") {
    jsArray = [];
} else {
    jsArray = JSON.parse(dataString);
}
let http = require("http");
let url = require("url");
let port_no = 3001;
http
    .createServer((request, response) => {
        let urlString = request.url;
        if (urlString != "/favicon.ico") {
            let urlObject = url.parse(urlString, true);
            let user = urlObject.query;
            console.log(user);
            console.log(JSON.stringify(user));
            response.writeHead(200, { "content-type": "text/html" });
            response.write(`<h2>Hello ${user.name}, your age is ${user.age}</h2>`);

            let n = user.name;
            let a = user.age;
            let emp = { name: n, age: a };
            jsArray.push(emp);
            let jsonArray = JSON.stringify(jsArray);

            fs.writeFileSync("data1.json", jsonArray);
        }
        response.end();
    })
    .listen(port_no, () => console.log(`Server running : ${port_no}`));