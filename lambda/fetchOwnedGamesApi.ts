import axios from "axios";

exports.header = async (event, context) => {
    const apiKey = process.env.REACT_APP_STEAM_API_KEY;
    const steamId = process.env.REACT_APP_STEAM_USER_ID;
    const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&include_appinfo=1`;

    axios
        .get(url)
        .then(response => {
            return {
                statusCode: 200,
                body: response.data
            };
        })
        .catch(error => ({ statusCode: 422, body: String(error) }));
};
