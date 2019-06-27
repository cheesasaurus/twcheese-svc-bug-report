const assert = require('assert');
const { handler } = require('./invoke/reportBug');

(async function() {

    // malformed request
    let actual = await handler({
        body: 'a asdlkfj kl'
    });
    assert.equal(400, actual.statusCode);

    // github rejected
    process.env.TWCHEESE_BUGREPORT_TOKEN = 'badbadbad';
    actual = await handler({
        body: '{"title":"hello","message":"world"}'
    });
    assert.equal(502, actual.statusCode);
    
})()
.catch((err) => console.warn(err));