const BugTracker = require('../src/BugTracker');


exports.handler = async (event) => {
    let input = JSON.parse(event.body);
    let output = await BugTracker.createIssue(input.title, input.message);

    const response = {
        statusCode: 200,
        body: JSON.stringify(output),
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    return response;
};