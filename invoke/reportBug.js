const { fetch } = require('../src/Network');


let root = 'https://api.github.com';
let owner = 'cheesasaurus';
let repo = 'twcheese-bug-report'; // private repo. https://help.github.com/en/articles/creating-an-issues-only-repository
let token = process.env.TWCHEESE_BUGREPORT_TOKEN;

(async function() {
    let response = await fetch(`${root}/repos/${owner}/${repo}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `token ${token}`
        },
        body: JSON.stringify({
            title: 'test title',
            body: 'test message'
        })
    });
    console.log(response.json());
})();
