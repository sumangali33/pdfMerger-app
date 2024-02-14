const express = require('express');
const app = express();
const cors = require('cors');
const indexRoute = require('./Routes/home.router.js');
const {router : showRoute} = require('./Routes/show.router.js'); 
const {router :mergeRoute} = require('./Routes/merge.router.js');
const downloadsRoute = require('./Routes/downloads.router.js');
const deleteRoute = require('./Routes/delete.router.js');
app.use('/show',express.static('merged'));
app.use('/downloads',express.static('./src/public/merged'));
app.use(express.static('./src/public'));
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");
app.set('views', './src/views');


app.use('/',indexRoute); 

app.use('/',showRoute);

app.use('/',mergeRoute);

app.use('/',downloadsRoute);

app.use('/',deleteRoute);


app.listen(3000, () => {
    console.log("app is listening at http://localhost:3000");
});
