
var fs = require("fs");
var azstorage = require('azure-storage');

module.exports = async function (context, req) {

    context.log('JavaScript HTTP trigger function processed a request.');
    
   
    var lines = fs.readFileSync(__dirname + "\\ListOfLatLongs.csv", "utf8")
                .split('\n');
    
    context.bindings.latlongqueue = lines;
    
    /*lines.forEach(function(line)  {
        context.bindings.latlongqueue = line; 
    });
    */
   
    /*
                while (next = lines.next()) {
                    context.bindings.latlongqueue.push(next);

                }
    context.bindings.latlongqueue = lines[0];
    context.bindings.latlongqueue = lines[1];
    */
   
    /* WORKS
    var data = fs.readFileSync(__dirname + "\\ListOfLatLongs.csv", "utf8");
    
    context.res = {
        body: "data" + data
    };

    context.bindings.latlongqueue = data.;

    */

    


    

    

    
};
