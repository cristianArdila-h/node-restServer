require('./config/config');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.send('Get Usuario');
});
app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    } else {
        res.json({ persona: body });
    }

});
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
            id
        })
        // res.send('Put Usuario');
});
app.delete('/usuario', function(req, res) {
    res.send('Delete Usuario');
});

app.listen(process.env.PORT, () => { console.log('escuchando puerto: ', process.env.PORT) });