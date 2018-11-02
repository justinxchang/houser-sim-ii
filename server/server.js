require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const controller = require('./controller')

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();
app.use(bodyParser.json());
app.use( express.static( __dirname + '../../public' ) );


massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log("Connected to the db")
})
.catch(err => {console.log(err)})

app.get('/api/houses', controller.displayHouses)
app.post('/api/houses', controller.createHouse)
app.delete('/api/houses/:id', controller.deleteHouse)


app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}.`))