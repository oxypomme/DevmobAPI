const { app } = require('../express');
const { db } = require('../db');

app.get('/projets', (req, res) => {
    db.query("SELECT * FROM projet", async (err, dataProj) => {
        res.status(200).json(await Promise.all(dataProj.map(async proj => {
            const dataStud = await db.asyncQuery(`SELECT id_etudiant FROM participe_projet WHERE id_projet=${proj.id_projet}`);
            const dataNote = await db.asyncQuery(`SELECT id_evaluateur, type_notation, note_1, note_2, note_3, commentaire FROM notation WHERE id_projet=${proj.id_projet}`)
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
    db.query(`SELECT * FROM projet WHERE id_projet=${id}`, (err, dataProj) => {
        db.query(`SELECT id_etudiant FROM participe_projet WHERE id_projet=${id}`, (err, dataStud) => {
            db.query(`SELECT id_evaluateur, type_notation, note_1, note_2, note_3, commentaire FROM notation WHERE id_projet=${id}`, (err, dataNote) => {
                res.status(200).json(dataProj.map(proj => ({
                    ...proj,
                    ids_etudiant: dataStud.map(stud => stud.id_etudiant),
                    notes: dataNote
                })));
            });
        });
    });
})
