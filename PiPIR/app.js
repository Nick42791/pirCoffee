const request = require("request");

request({
    method:"POST",
    url:"http://localhost:3000/makeCoffee",
    
}, function(err, res, body){
    if(!err && res.statusCode==200){
        console.log(body);
    }
})