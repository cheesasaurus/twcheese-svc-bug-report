const BugTracker = require('../src/BugTracker');


(async function() {
    let data = await BugTracker.createIssue('test title', 'test message');
    console.log(data);
})();
