const keys = require('../../config/keys');

module.exports = survey => `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>Please provide your input to improve our services.</h3>
                <p>Please answer  the following questions:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                </div>
            </div>
        </body>
    </html>
`;
