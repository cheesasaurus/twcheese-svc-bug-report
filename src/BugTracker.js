const { fetch } = require('./Network');

let BugTracker = {

    async createIssue(title, message) {
        // private repo. https://help.github.com/en/articles/creating-an-issues-only-repository
        let url = 'https://api.github.com/repos/cheesasaurus/twcheese-bug-report/issues';

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `token ${process.env.TWCHEESE_BUGREPORT_TOKEN}`,
                'User-Agent': 'TwCheese Bug Reporter'
            },
            body: JSON.stringify({
                title: title,
                body: message
            })            
        });
        if (response.statusCode !== 201) {
            throw new Error(`Failed to create issue. Github responded with ${response.statusCode}`);
        }
        let obj = await response.json();
        return { url: obj.html_url };
    }

};


module.exports = BugTracker;