const express =require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/moongose');

app.use(express.static('./assets'));

// Use expressLayouts
app.use(expressLayouts);
// extract styles and scripts from sub pages into layouts
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)


// use express router

app.use('/',require('./routes'));

// Set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`)
    }
    console.log(`Server is running on port:${port}`);
})