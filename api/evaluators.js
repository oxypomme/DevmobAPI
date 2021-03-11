const { app } = require('../express');
const { db } = require('../db');

app.get('/evaluateurs/:name', (req, res) => {
    const { name } = req.params;
    db.query(`SELECT id_evaluateur, nom, prenom FROM evaluateur WHERE nom='${name}'`, (err, data) => {
        res.status(200).json(data);
    });
})

app.get('/evaluateurs/:mail/:pass', (req, res) => {
    const { mail, pass } = req.params;
    db.query(`SELECT id_evaluateur, nom, prenom, email FROM evaluateur WHERE email='${mail}' AND motdepasse='${pass}'`, (err, data) => {
        res.status(200).json(data);
    });
})