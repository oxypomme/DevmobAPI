const { app } = require('../express');
const { db } = require('../db');

/**
 * @api {get} /projets Request All Projects Information
 * @apiName GetProjects
 * @apiGroup Projects
 * @apiDescription Gets the rpjects
 * 
 * @apiSuccess {JSONArray} result The projects
 * 
 * @apiSuccessExample Example data on success:
 * {
 *   "code": "RQ_ALL_PROJ",
 *   "data": [
 *       {
 *           "id_projet": 1,
 *           "numero": 1,
 *           "titre": "Gestion du site irsid.fr",
 *           "id_encadrant": 3,
 *           "etudiants": [
 *               1,
 *               4
 *           ],
 *           "notes": [
 *               {
 *                  "id_evaluateur": 2,
 *                  "type_notation": "P",
 *                  "note_1": 4,
 *                  "note_2": 3.5,
 *                  "note_3": 2.75,
 *                  "commentaire": "Design très original"
 *               }
 *           ]
 *       },
 *       {
 *           "id_projet": 2,
 *           "numero": 2,
 *           "titre": "Test de Rorschach",
 *           "id_encadrant": 1,
 *           "etudiants": [
 *               2,
 *               3
 *           ],
 *           "notes": []
 *       }
 *   ]
 * }
 */
app.get('/projets', (req, res) => {
    db.query("SELECT * FROM projet", async (err, dataProj) => {
        if (dataProj) {
            res.status(200).json({
                code: "RQ_ALL_PROJ",
                data: await Promise.all(dataProj.map(async proj => {
                    const dataStud = await db.asyncQuery(`SELECT id_etudiant FROM participe_projet WHERE id_projet=${proj.id_projet}`);
                    const dataNote = await db.asyncQuery(`SELECT id_evaluateur, type_notation, note_1, note_2, note_3, commentaire FROM notation WHERE id_projet=${proj.id_projet}`)
                    return ({
                        ...proj,
                        etudiants: dataStud.map(stud => stud.id_etudiant),
                        notes: dataNote
                    });
                }))
            });
        }
        return null;
    });
});

/**
 * @api {get} /projets/:id Request Single Project Information
 * @apiName GetProjects
 * @apiGroup Projects
 * @apiParam {number} id The id of the project
 * @apiDescription Gets the project with the id
 * 
 * @apiSuccess {JSONArray} result The projects with the id
 * 
 * @apiSuccessExample Example data on success:
 * {
 *   "code": "RQ_PROJ",
 *   "data": [
 *     {
 *       {
 *           "id_projet": 1,
 *           "numero": 1,
 *           "titre": "Gestion du site irsid.fr",
 *           "id_encadrant": 3,
 *           "etudiants": [
 *               1,
 *               4
 *           ],
 *           "notes": [
 *               {
 *                  "id_evaluateur": 2,
 *                  "type_notation": "P",
 *                  "note_1": 4,
 *                  "note_2": 3.5,
 *                  "note_3": 2.75,
 *                  "commentaire": "Design très original"
 *               }
 *           ]
 *       }
 *     }
 *   ]
 * }
 */
app.get('/projets/:id', (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM projet WHERE id_projet=${id}`, (err, dataProj) => {
        db.query(`SELECT id_etudiant FROM participe_projet WHERE id_projet=${id}`, (err, dataStud) => {
            db.query(`SELECT id_evaluateur, type_notation, note_1, note_2, note_3, commentaire FROM notation WHERE id_projet=${id}`, (err, dataNote) => {
                res.status(200).json({
                    code: "RQ_PROJ",
                    data: dataProj.map(proj => ({
                        ...proj,
                        ids_etudiant: dataStud.map(stud => stud.id_etudiant),
                        notes: dataNote
                    }))
                });
            });
        });
    });
})
