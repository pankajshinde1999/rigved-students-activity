let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');
let port = 3001;

app.listen(port, () => console.log(`Server is running at ${port}`));

app.use(bodyParser.json());

app.post('/user', (request, response) => {
    let data = fs.readFileSync('userdata.json');
    let dataString = data.toString();
    if (dataString.length < 1 || dataString == "") {
        jsArray = [];
    } else {
        jsArray = JSON.parse(dataString);
    }
    let content = request.body;
    jsArray.push(content);
    let jsObj = JSON.stringify(jsArray);
    fs.writeFileSync('userdata.json', jsObj);
    response.send('data added.!')
});

app.get('/user', (request, response) => {
    let data = fs.readFileSync('userdata.json');
    let datastring = data.toString();
    let jsonObj = JSON.parse(datastring);
    response.json(jsonObj);
});

app.get('/user/:id', (request, response) => {
    let userid = request.params.id;
    let data = fs.readFileSync('userdata.json');
    let datastring = data.toString();
    let jsonObj = JSON.parse(datastring);
    for (let i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i].userId == userid) {
            let content = { userId: jsonObj[i].userId, name: jsonObj[i].name, age: jsonObj[i].age };
            response.json(content);
        }
    }
});


app.put('/user/:id/:name/:age', (request, response) => {
    let userid = request.params.id;
    let username = request.params.name;
    let userage = request.params.age;
    let data = fs.readFileSync('userdata.json');
    let dataString = data.toString();
    let jsArray = undefined;
    if (dataString.length < 1 || dataString == "") {
        jsArray = [];
    }
    else {
        jsArray = JSON.parse(dataString)
    }
    let emp = { userId: userid, name: username, age: userage };
    jsArray.push(emp);
    let jsonArray = JSON.stringify(jsArray);
    fs.writeFileSync("userdata.json", jsonArray);
    response.json(jsonArray);

});


app.delete('/user/:id', (request, response) => {
    let userid = request.params.id;
    let data = fs.readFileSync('userdata.json');
    let datastring = data.toString();
    let jsonObj = JSON.parse(datastring);
    for (let i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i].userId == userid) {
            jsonObj.splice(i, 1);
            let jsObj = JSON.stringify(jsonObj);
            fs.writeFileSync('userdata.json', jsObj);
            response.json(jsonObj);
        }
    }
});
