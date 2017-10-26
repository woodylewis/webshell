const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')();
const bodyParser = require('body-parser');
const PORT = 1293;

router.route('/')
.get((req, res, next) => {
    console.log('GET ', req.body);
    res.json({ 'got' : 'get'});
})
.post((req, res, next) => {
    console.log('POST ', req.body);
    res.json({ 'got' : 'post'});
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors);
app.use('/', router);
app.listen(PORT, () => {
    console.log('listening on ' + PORT);
});

