const { app } = require('../express');
const { db } = require('../db');

/**
 * @api {get} /etudiants Request All Student Information
 * @apiName GetStudents
 * @apiGroup Students
 * @apiDescription Gets the students
 * 
 * @apiSuccess {JSONArray} result The students
 * 
 * @apiSuccessExample Example data on success:
 * {
 *  "code": "RQ_ALL_ETU",
 *  "data": [
 *   {
 *      "id_evaluateur": 2,
 *      "nom": "LAROCHE",
 *      "prenom": "Pierre"
 *   },
 *   {
 *      "id_etudiant": 2,
 *      "nom": "PONSIGNON",
 *      "prenom": "Laurine"
 *   }
 *  ]
 * }
 */
app.get('/etudiants', (req, res) => {
    db.query("SELECT * FROM etudiant", (err, data) => {
        res.status(200).json({
            code: "RQ_ALL_ETU",
            data
        });
    });
});

/**
 * @api {get} /etudiants/:id Request Single Student Information
 * @apiName GetStudents
 * @apiGroup Students
 * @apiParam {number} id The id of the student
 * @apiDescription Gets the student with the id
 * 
 * @apiSuccess {JSONArray} result The students with the id
 * 
 * @apiSuccessExample Example data on success:
 * {
 *  "code": "RQ_ETU",
 *  "data": [
 *   {
 *      "id_etudiant": 1,
 *      "nom": "BOMBARDIER",
 *      "prenom": "Julien"
 *   }
 *  ]
 * }
 */
app.get('/etudiants/:id', (req, res) => {
    const { id } = req.params
    db.query(`SELECT * FROM etudiant WHERE id_etudiant=${id}`, (err, data) => {
        res.status(200).json({
            code: "RQ_ALL_ETU",
            data
        });
    });
})