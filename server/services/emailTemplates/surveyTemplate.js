module.exports = survey => `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>Please provide your input to improve our services.</h3>
                <p>Please answer  the following questions:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="http://localhost:3000">Yes</a>
                </div>
                <div>
                    <a href="http://localhost:3000">No</a>
                </div>
            </div>
        </body>
    </html>
`;
