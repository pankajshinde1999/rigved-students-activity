const express = require("express");
const cors = require("cors");
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

let app = express();

let dbURL = "mongodb://localhost:27017";

let port = 3005;

app.listen(port, () => console.log(`Server is running at ${port}`));
app.use(bodyParser.json());
app.use(cors());

app.get("/emp", (req, res) => {
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("mydb");
        let cursor = db.collection("empdata").find();
        let employee = [];

        cursor.forEach((doc, err) => {
            if (err)
                throw err;
            employee.push(doc);
        }, () => {
            res.json(employee);
            client.close();
        });
    });

});

app.post("/emp", (req, response) => {
    let empDoc = req.body

    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;

        let db = client.db("mydb");

        db.collection("empdata").insertOne(empDoc, (err, res) => {
            if (err) {
                response.status(409).json(`employee with an id ${empDoc._id} doenst exist !`)
            }
            response.status(201).json(res);
            client.close();
        });
    });
});

app.delete("/emp/:id", (req, response) => {
    let id = parseInt(req.params.id);

    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;

        let db = client.db("mydb");

        db.collection("empdata").deleteOne({ _id: id })
            .then((doc) => {
                response.json(doc);
                client.close();
            });

    });
});

app.get("/emp/:id", (req, response) => {
    let id = parseInt(req.params.id);
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;

        let db = client.db("mydb");

        db.collection("empdata").findOne({ _id: id })
            .then((doc) => {
                if (doc != null) {
                    response.json(doc);
                } else {
                    response.status(404).json({ "message": `id ${id} doesn't exist` });
                }
                client.close();
            });
    });
});
app.post("/emp", (req, response) => {
    let empDoc = req.body

    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;

        let db = client.db("mydb");

        db.collection("empdata").insertOne(empDoc, (err, res) => {
            if (err) {
                response.status(409).json(`employee with id ${empDoc._id} doesn't exist`)
            }
            response.status(201).json(res);
            client.close();
        });
    });
});

app.put("/emp/:id/:salary", (req, res) => {
    let id = parseInt(req.params.id);
    let salary = parseInt(req.params.salary);
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("mydb");

        db.collection("empdata").updateOne({ _id: id }, { $set: { salary: salary } })
            .then((doc) => {
                res.json(doc);
                client.close();
            });
    });
});
