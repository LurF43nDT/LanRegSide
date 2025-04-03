const fetch = require("node-fetch");

exports.handler = async function (event, context) {
    const apiToken = nfp_dxZBhxLscMyFiekXo7WtfaYoeLhBwRdm3f56.NETLIFY_API_TOKEN; // Sett i Netlify Environment Variables
    const formId = "67bb0418db69600008728dd4"; // Erstatt med din form-ID fra Netlify

    try {
        const response = await fetch(
            `https://api.netlify.com/api/v1/forms/${formId}/submissions`,
            {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
            }
        );
        const submissions = await response.json();
        const count = submissions.length;

        return {
            statusCode: 200,
            body: JSON.stringify({ count }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Kunne ikke hente data" }),
        };
    }
};