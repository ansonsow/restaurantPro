const express = require("express");
const app = express();
require('./models/db')

const PORT = 8000;
app.set('port', process.env.PORT || PORT); 


app.get('/', (req, res) => {
    res.send("haaaaaa")
});

app.get('/api', (req, res) => {
    res.json({ message: "blublublublu" });
});

app.listen(PORT, ()=>{
    console.log("app started on port "+ PORT);
})
