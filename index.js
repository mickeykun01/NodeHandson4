const express = require('express')
const bodyParser = require('body-parser');
const Constants = require('./Config/Constant');
const loginRouter = require('./Routes/login')
const registerRouter = require('./Routes/register')

const app = express();

app.use(bodyParser.json());
app.use(loginRouter);
app.use(registerRouter);


app.get('/' , (req,res)=>{
    res.send('THis is the Home Page');
    console.log("home page is here.");
})



app.listen(Constants.PORT , ()=>{
    console.log(`Server is listening at http://localhost:${Constants.PORT}`);

});