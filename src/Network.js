const https = require('https');


async function fetch(url, options) {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};
    options.headers['User-Agent'] = options.headers['User-Agent'] || 'TwCheese';

    return new Promise((resolve, reject) => {        
    
        let request = https.request(url, options, (response) => {
            let responseText = '';
    
            response.on('data', (chunk) => {
                responseText += chunk;
            });

            response.on('end', () => {
                response.json = () => JSON.parse(responseText);
                response.text = () => responseText
                resolve(response);
            });
        });
    
        request.on('error', (err) => {
            reject(err);
        });
    
        request.write(options.body);
        request.end();
    });    
}


exports.fetch = fetch;