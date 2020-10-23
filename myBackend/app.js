const express = require('express');
const mysql = require("mysql");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

const { request, response } = require("express");


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
});

db.connect((err) => {
    if (err) {
    throw err;
    }
    console.log("SQL connected");
});

app.get("/getData", (req, res) => {
  let sql = `SELECT * FROM team LIMIT 20`;
    db.query(sql, (err, results) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(results));
    res.json(results);
    });
    
});

app.get("/getData/:id", (req, res) => {
  let sql = `SELECT * FROM team where idteam = ${req.params.id}`;
    db.query(sql, (err, results) => {
    if(err) throw err;
    results = JSON.parse(JSON.stringify(results));
    res.json(results);
    });
});

app.get("/getInfo/:que", (req, res) => {
  let sql = req.params.que;
    db.query(sql, (err, results) => {
    if (err) throw err;
    results = JSON.parse(JSON.stringify(results));
    res.json(results);
    });
    
});



app.listen(port, () => console.log(`listening on port ${port}`))