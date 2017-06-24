const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/show-filesize', upload.single('upFile'), function(req, res) {
    res.send({'filesize': req.file.size + ' bytes'});
});

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT);
});