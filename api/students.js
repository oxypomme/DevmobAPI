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