const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('src'));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index/html'));
});

function register(){
    router.post('http://127.0.0.1:4000/users/register', function(req, res) {
    console.log( res.body );
});
}


app.use('/', router);
app.listen(process.env.port || 3000);

