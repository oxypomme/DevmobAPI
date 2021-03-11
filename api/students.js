const initRoutes = (app, db) => {
    app.get('/etudiants', (req, res) => {
        db.con.query("SELECT * FROM etudiant", (err, data) => {
            res.status(200).json(data);
        });
    });

    app.get('/etudiants/:id', (req, res) => {
        const id = parseInt(req.params.id)
        db.con.query(`SELECT * FROM etudiant WHERE id_etudiant=${id}`, (err, data) => {
            res.status(200).json(data);
        });
    })
}

exports.initRoutes = initRoutes;