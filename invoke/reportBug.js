const BugTracker = require('../src/BugTracker');


let headers = {
    'Access-Control-Allow-Origin': '*'
};


exports.handler = async (event) => {
    try {
        var input = JSON.parse(event.body);
    }    
    catch (err) {
        return { statusCode: 400, headers };
    }

    try {
        let output = await BugTracker.createIssue(input.title, input.message);
        return {
            statusCode: 201,
            body: JSON.stringify(output),
            headers: headers
        };       
    }
    catch(err) {
        return { statusCode: 502, headers };
    }
};