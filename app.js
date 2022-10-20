var express = require('express');
var app = express();
var axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/static', express.static("public"));

app.get('/', function(req, res){
    randomizer = Math.floor(Math.random() * 100) + 1;
    axios.get('https://xkcd.com/'+randomizer+'/info.0.json').then(function(response){
        res.render('index.ejs', {comicData: response.data});
    })
})

app.listen(3000, function(){
    console.log('App listening on port 3000');
})