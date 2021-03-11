const initRoutes = (app, db) => {
    app.get('/evaluateurs/:name', (req, res) => {
        const { name } = req.params;
        db.con.query(`SELECT id_evaluateur, nom, prenom FROM evaluateur WHERE nom='${name}'`, (err, data) => {
            res.status(200).json(data);
        });
    })

    app.get('/evaluateurs/:mail/:pass', (req, res) => {
        const { mail, pass } = req.params;
        db.con.query(`SELECT id_evaluateur, nom, prenom, email FROM evaluateur WHERE email='${mail}' AND motdepasse='${pass}'`, (err, data) => {
            res.status(200).json(data);
        });
    })

    /*
    app.post('/etudiants', (req, res) => {
        students.push(req.body);
        res.status(200).json(students);
    });
    
    app.put('/etudiants/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const student = students.find(stud => stud.id === id);
        student = req.body;
        res.status(200).json(students);
    });
    
    app.delete('/etudiants/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const student = students.find(stud => stud.id === id);
        students.splice(students.indexOf(student), 1);
        res.status(200).json(students);
    })
    */
}

exports.initRoutes = initRoutes;