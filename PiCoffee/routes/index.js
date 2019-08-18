let router = require("express").Router();

let coffeeBrew = require("../brew.js");
let log = [];
let count = 1;
let now = new Date();
let status = "Declined";
let hasBrewedToday = false;

router.get("/", function(req,res){
    console.log("A get request?");
    res.json(log);
    
})
router.post("",function(req,res){
    res.send("We can make you a coffee!");
    if(!hasBrewedToday){
        coffeeBrew();
        status = "Accepted";

        hasBrewedToday = true;
        //this calculation is done in minutes first, then miliseconds.
        let timeTilBrewAgain = ((24*60)-(((now.getHours()*60) + now.getMinutes()) - (6*60))) * 60000;
        
        //a timer that takes the trigger time and then resets it at 6 am the next day.
        setTimeout(function(){
            hasBrewedToday = false;
        }, timeTilBrewAgain);
    }
    log.push({
        request: count,
        time: `${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()} @ ${now.getHours()}:${now.getMinutes()}`,
        status: status
    });
    count++;
    console.log("A post request!");
})

module.exports = router;
