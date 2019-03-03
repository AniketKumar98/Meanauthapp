const express=require('express');
const bcrypt=require('bcryptjs');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');
const app=express();
const users=require('./routes/users');
const port=3000;
mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('connected'+config.database);
});
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users',users);
 app.listen(port,()=>{
     console.log('server started at port'+port)
 });
 app.get('./',(req,res)=>{
     res.send('Invalid error');
 });
 app.use(express.static(path.join(__dirname,'public')));

