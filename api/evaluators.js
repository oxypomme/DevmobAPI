const { app } = require('../express');
const { db } = require('../db');

/**
 * @api {get} /evaluateurs/:name Request Evaluator Information with Name
 * @apiName GetEvaluators
 * @apiGroup Evaluators
 * @apiParam {string} name The name of the evaluator
 * @apiDescription Gets the evaluator with the name
 * 
 * @apiSuccess {JSONArray} result The evaluators with the name
 * 
 * @apiSuccessExample Example data on success:
 * [
 *   {
 *      "id_evaluateur": 2,
 *      "nom": "LAROCHE",
 *      "prenom": "Pierre"
 *   }
 * ]
 */
app.get('/evaluateurs/:name', (req, res) => {
    const { name } = req.params;
    db.query(`SELECT id_evaluateur, nom, prenom FROM evaluateur WHERE nom='${name}'`, (err, data) => {
        res.status(200).json(data);
    });
})

/**
 * @api {get} /evaluateurs/:name Request Evaluator Information with Logs
 * @apiName GetEvaluators
 * @apiGroup Evaluators
 * @apiParam {string} mail The mail of the evaluator
 * @apiParam {string} pass The password of the evaluator
 * @apiDescription Gets the evaluator with the logs
 * 
 * @apiSuccess {JSONArray} result The evaluators with the corresponding evaluators
 * 
 * @apiSuccessExample Example data on success:
 * [
 *   {
 *      "id_evaluateur": 2,
 *      "nom": "LAROCHE",
 *      "prenom": "Pierre",
 *      "email": "pl@ul.fr"
 *   }
 * ]
 */
app.get('/evaluateurs/:mail/:pass', (req, res) => {
    const { mail, pass } = req.params;
    db.query(`SELECT id_evaluateur, nom, prenom, email FROM evaluateur WHERE email='${mail}' AND motdepasse='${pass}'`, (err, data) => {
        res.status(200).json(data);
    });
})