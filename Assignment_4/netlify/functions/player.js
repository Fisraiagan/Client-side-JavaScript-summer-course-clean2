export async function handler(event, context) {
    const playerName = event.queryStringParameters.name;

    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${playerName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch player data" })
        };
    }
}
