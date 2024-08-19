const { google } = require("googleapis");
const keys = require("./path/to/your/credentials.json");

// Create a new JWT client using the credentials
const client = new google.auth.JWT(keys.client_email, null, keys.private_key, ["https://www.googleapis.com/auth/spreadsheets"]);

// Authorize the client
client.authorize((err, tokens) => {
	if (err) {
		console.error("Authorization error:", err);
		return;
	}

	// Create a new instance of the Google Sheets API
	const sheets = google.sheets({ version: "v4", auth: client });

	// Specify the spreadsheet ID and range of cells you want to fetch
	const spreadsheetId = "SFR Website";
	const range = "Sheet1!A1:B2";

	// Fetch the data from the specified range
	sheets.spreadsheets.values.get(
		{
			spreadsheetId,
			range,
		},
		(err, res) => {
			if (err) {
				console.error("The API returned an error:", err);
				return;
			}

			const data = res.data.values;
			console.log("Fetched data:", data);
			// You can now map through the data array and process it as needed
		}
	);
});
