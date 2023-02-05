// jshint eversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.set('view engine','ejs'); // place it below the declaration of 'app'

app.get("/",(req,res)=>{

    // setting up variables for fetching date
    var today=new Date();
    var currentDay=today.getDay();
    var day="";
    var particularDay="";

    // if-else loop for weekend or weekdays
    if(currentDay==0 || currentDay==6){
        day="Weekend";
    }
    else{
        day="Weekdays";
    }

    // switch statements for which kind of day
    switch(currentDay){
        case 0:
            particularDay="Sunday";
            break;
        case 1:
            particularDay="Monday";
            break;
        case 2:
            particularDay="Tuesday";
            break; 
        case 3:
            particularDay="Wednesday";
            break;
        case 4:
            particularDay="Thursday";
            break;
        case 5:
            particularDay="Friday";
            break;
        case 6:
            particularDay="Saturday";
            break;           

        // adding a default case for backup
        default:
            console.log("Error: Current day: "+currentDay);
    }

    // render all the variables from the ejs file
    res.render("lists",{KindOfDay:day,TheDay:particularDay});
    // res.render('lists',{TheDay:particularDay});
})


// instead of writing 'function' we can use arrow function
app.listen(3000,()=>{
    console.log("Server started on port 3000.");
});