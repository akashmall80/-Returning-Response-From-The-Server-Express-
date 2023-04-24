const express = require('express');
const port = 8000;

const app = express();

app.get('/',function(req,res){
  res.send('cool')
})


app.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(port);
})