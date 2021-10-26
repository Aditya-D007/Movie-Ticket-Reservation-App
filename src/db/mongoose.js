// /Users/harsh/mongodb/bin/mongod.exe --dbpath=/Users/harsh/mongodb-data
const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true); 
mongoose.set('useUnifiedTopology', true); 

mongoose.connect("mongodb+srv://apnashowharsh:apnashowharsh@cluster0.vn3kr.mongodb.net/apnaShow", {useNewUrlParser: true, useUnifiedTopology: true});