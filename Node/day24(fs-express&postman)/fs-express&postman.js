
let fs = require('fs');
data = fs.readFileSync("dataemp.json");
dataString = data.toString();
jsArray = JSON.parse(dataString);
console.log(jsArray);

let express = require('express');
let app = express();
app.listen(3001, () => {
    console.log('Server is running 3001');
});
app.get('/dataemp', (request, response) => {
    response.json(jsArray)
});
