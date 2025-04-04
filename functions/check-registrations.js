const fetch = require("node-fetch");

exports.handler = async function (event, context) {
    const apiToken = process.env.NETLIFY_API_TOKEN; // Hent token fra miljøvariabel
    const formId = "67bb0418db69600008728dd4"; // Din form-ID

    // Sjekk om tokenet er til stede
    if (!apiToken) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "NETLIFY_API_TOKEN mangler i miljøvariabler" }),
        };
    }

    try {
        const response = await fetch(
            `https://api.netlify.com/api/v1/forms/${formId}/submissions`,
            {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP-feil: ${response.status}`);
        }

        const submissions = await response.json();
        const count = submissions.length;

        return {
            statusCode: 200,
            body: JSON.stringify({ count }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Kunne ikke hente data: ${error.message}` }),
        };
    }
};