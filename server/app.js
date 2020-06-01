const dbPool = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 4000;

/**
 * @api {get} /save-user/ Request to get landing pad by id
 * @apiParam none
 * @apiSuccess {String} json containing landing pad object
 */

app.post('/save-user/', async (req, res) => {
    console.log(req.body.illness);
    await dbPool.query('INSERT INTO users (illness, pain_level) VALUES ( ?, ?)',
        [req.body.illness, req.body.pain_level], function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            throw err;
        }
    });
});



app.listen(port, () => console.log(`Listening on ${port}`));