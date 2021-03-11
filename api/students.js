const { app } = require('../express');
const { db } = require('../db');

app.get('/etudiants', (req, res) => {
    db.query("SELECT * FROM etudiant", (err, data) => {
        res.status(200).json(data);
    });
});

app.get('/etudiants/:id', (req, res) => {
    const id = parseInt(req.params.id)
    db.query(`SELECT * FROM etudiant WHERE id_etudiant=${id}`, (err, data) => {
        res.status(200).json(data);
    });
})