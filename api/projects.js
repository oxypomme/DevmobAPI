const initRoutes = (app, db) => {
    app.get('/projets', (req, res) => {
        db.con.query("SELECT * FROM projet", async (err, dataProj) => {
            res.status(200).json(await Promise.all(dataProj.map(async proj => {
                const dataStud = await db.con.asyncQuery(`SELECT id_etudiant FROM participe_projet WHERE id_projet=${proj.id_projet}`);
                const dataNote = await db.con.asyncQuery(`SELECT id_evaluateur, type_notation, note_1, note_2, note_3, commentaire FROM notation WHERE id_projet=${proj.id_projet}`)
                return ({
                    ...proj,
                    etudiants: dataStud.map(stud => stud.id_etudiant),
                    notes: dataNote
                });
            })));
        });
    });

    app.get('/projets/:id', (req, res) => {
        const id = parseInt(req.params.id);
        db.con.query(`SELECT * FROM projet WHERE id_projet=${id}`, (err, dataProj) => {
            db.con.query(`SELECT id_etudiant FROM participe_projet WHERE id_projet=${id}`, (err, dataStud) => {
                db.con.query(`SELECT id_evaluateur, type_notation, note_1, note_2, note_3, commentaire FROM notation WHERE id_projet=${id}`, (err, dataNote) => {
                    res.status(200).json(dataProj.map(proj => ({
                        ...proj,
                        ids_etudiant: dataStud.map(stud => stud.id_etudiant),
                        notes: dataNote
                    })));
                });
            });
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