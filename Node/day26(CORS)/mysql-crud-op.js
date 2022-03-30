let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const mysql = require('mysql2');

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Server started on port 3001');
});

let  dbconn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rigved_db'
});

dbconn.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected');
});


app.get('/employee', (req, res) => {
  let sqlQuery = "SELECT * FROM employee";

  let query = dbconn.query(sqlQuery, (err, results) => {
    if (err)
      throw err;
    res.send((results));
  });
});


app.get('/employee/:id', (req, res) => {
  let sqlQuery = "SELECT * FROM employee WHERE id=" + req.params.id;

  let query = dbconn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send((results));
  });
});

app.post('/employee', (req, res) => {
  let data = { id: req.body.id, name: req.body.name, dept_no : req.body.dept_no, salary: req.body.salary };

  let sqlQuery = "INSERT INTO employee SET ?";

  let query = dbconn.query(sqlQuery, data, (err, results) => {
    if (err) throw err;
    res.send((results));
  });
});

app.put('/employee/:id', (req, res) => {
  let sqlQuery = "UPDATE employee SET salary='" + req.body.salary + "', name='" + req.body.name + "' WHERE id=" + req.params.id;

  let query = dbconn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send((results));
  });
});
app.delete('/employee/:id', (req, res) => {
  let sqlQuery = "DELETE FROM employee WHERE id=" + req.params.id + "";

  let query = dbconn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send((results));
  });
});
