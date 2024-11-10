const { google } = require("googleapis");
const keys = require("./googleSheet.json");

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, ["https://www.googleapis.com/auth/spreadsheets"]);

const sheets = google.sheets({ version: "v4", auth: client });

const spreadsheetId = "1ZdEwhQTcMf1YkWqzubV7HMPBaWtuTlllt-jXAs4eTzg";
const range = "Sheet1!C7:G26";

async function fetchData() {
	return new Promise((resolve, reject) => {
		client.authorize((err, tokens) => {
			if (err) {
				reject("Authorization error: " + err);
				return;
			}

			sheets.spreadsheets.values.get(
				{
					spreadsheetId,
					range,
				},
				(err, res) => {
					if (err) {
						reject("The API returned an error: " + err);
						return;
					}

					const data = res.data.values;
					resolve(data);
					console.log("Fetch Data:", data);
				}
			);
		});
	});
}

module.exports = { fetchData };
