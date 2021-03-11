const { app } = require('../express');
const { db } = require('../db');

/**
 * @api {post} /notes Post New Notation
 * @apiName PostNotation
 * @apiGroup Notation
 * @apiDescription Post a new note
 * 
 * @apiSuccess {JSONObject} result The result of the operation
 * 
 * @apiSuccessExample Example data on success:
 * {
 *    "result": {
 *      "fieldCount": 0,
 *      "affectedRows": 1,
 *      "insertId": 0,
 *      "serverStatus": 2,
 *      "warningCount": 0,
 *      "message": "",
 *      "protocol41": true,
 *      "changedRows": 0
 *    },
 *    "error": null
 * }
 */
app.post('/notes/:prj/:eva/:type', (req, res) => {
    const { eva, prj, type } = res.params;
    const { note_1, note_2, note_3, commentaire } = req.body;
    db.query(`INSERT INTO notation (id_evaluateur, id_projet, type_notation, note_1, note_2, note_3, commentaire) 
    VALUES ('${eva}','${prj}','${type}',${note_1},${note_2},${note_3},'${commentaire}')`,
        (error, result) => {
            res.status(200).json({
                result,
                error
            });
        });
});


/**
 * @api {put} /notes Edit Notation
 * @apiName PutNotation
 * @apiGroup Notation
 * @apiDescription Edit a note
 * 
 * @apiSuccess {JSONObject} result The result of the operation
 * 
 * @apiSuccessExample Example data on success:
 * {
 *    "result": {
 *      "fieldCount": 0,
 *      "affectedRows": 1,
 *      "insertId": 0,
 *      "serverStatus": 2,
 *      "warningCount": 0,
 *      "message": "",
 *      "protocol41": true,
 *      "changedRows": 0
 *    },
 *    "error": null
 * }
 */
app.put('/notes/:prj/:eva/:type', (req, res) => {
    const { eva, prj, type } = req.params;
    const { note_1, note_2, note_3, commentaire } = req.body;
    let params = "";
    const parseVar = (name, value) => {
        if (value) {
            if (params.length > 0) {
                params += ", ";
            }
            params += `${name}=${value}`;
        }
    }
    parseVar("note_1", note_1);
    parseVar("note_2", note_2);
    parseVar("note_3", note_3);
    if (commentaire) {
        if (params.length > 0) {
            params += ", ";
        }
        params += `commentaire='${commentaire}'`;
    }

    console.log(params);

    db.query(`UPDATE notation SET ${params} WHERE id_evaluateur=${eva} AND id_projet=${prj} AND type_notation='${type}'`, (error, result) => {
        res.status(200).json({
            result,
            error
        });
    })
});