const { app } = require('../express');
const { db } = require('../db');

/**
 * @api {get} /evaluateurs Request All Evaluator Information
 * @apiName GetEvaluators
 * @apiGroup Evaluators
 * @apiDescription Gets the evaluator with the name
 * 
 * @apiSuccess {JSONArray} result The evaluators
 * 
 * @apiSuccessExample Example data on success:
 * {
 *  "code": "RQ_EVAL_NAME",
 *  "data": [
 *   {
 *      "id_evaluateur": 2,
 *      "nom": "LAROCHE",
 *      "prenom": "Pierre"
 *   },
 *   {
 *      "id_evaluateur": 3,
 *      "nom": "ROKA",
 *      "prenom": "Zsuzsanna"
 *   }
 *  ]
 * }
 */
app.get('/evaluateurs', (req, res) => {
    const { name } = req.params;
    db.query(`SELECT id_evaluateur, nom, prenom FROM evaluateur`, (err, data) => {
        res.status(200).json({
            code: "RQ_ALL_EVAL",
            data
        });
    });
})

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
 * {
 *  "code": "RQ_EVAL_NAME",
 *  "data": [
 *   {
 *      "id_evaluateur": 2,
 *      "nom": "LAROCHE",
 *      "prenom": "Pierre"
 *   }
 *  ]
 * }
 */
app.get('/evaluateurs/:name', (req, res) => {
    const { name } = req.params;
    db.query(`SELECT id_evaluateur, nom, prenom FROM evaluateur WHERE nom='${name}'`, (err, data) => {
        res.status(200).json({
            code: "RQ_EVAL_NAME",
            data
        });
    });
})

/**
 * @api {get} /evaluateurs/:mail/:pass Request Evaluator Information with Logs
 * @apiName GetEvaluators
 * @apiGroup Evaluators
 * @apiParam {string} mail The mail of the evaluator
 * @apiParam {string} pass The password of the evaluator
 * @apiDescription Gets the evaluator with the logs
 * 
 * @apiSuccess {JSONArray} result The evaluators with the corresponding evaluators
 * 
 * @apiSuccessExample Example data on success:
 * {
 *  "code": "RQ_EVAL_LOGS"
 *  "data": [
 *   {
 *      "id_evaluateur": 2,
 *      "nom": "LAROCHE",
 *      "prenom": "Pierre",
 *      "email": "pl@ul.fr"
 *   }
 *  ]
 * }
 */
app.get('/evaluateurs/:mail/:pass', (req, res) => {
    const { mail, pass } = req.params;
    db.query(`SELECT id_evaluateur, nom, prenom, email FROM evaluateur WHERE email='${mail}' AND motdepasse='${pass}'`, (err, data) => {
        res.status(200).json({
            code: "RQ_EVAL_LOGS",
            data
        });
    });
})