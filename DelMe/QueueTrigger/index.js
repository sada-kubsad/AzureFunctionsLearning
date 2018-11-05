var request = require('request');

module.exports = async function (context, myQueueItem) {
    
    var content = myQueueItem.split(',');
    
    //var apicall = "https://api.weather.com/v1/geocode/" + content[1] + "/" + content[0] + "/forecast/fifteenminute.json?language=en-US&units=e&apiKey=0425fb35c24e4066a5fb35c24e5066ab";

    var apicall = "https://api.weather.com/v1/geocode/34.17/-118.07/forecast/fifteenminute.json?language=en-US&units=e&apiKey=0425fb35c24e4066a5fb35c24e5066ab";
    request(apicall, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            context.log('Response: ', response);
            context.log('Body: ', body.content); 
        }
    });

};