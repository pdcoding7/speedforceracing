const { google } = require("googleapis");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Load the service account key JSON file.
const serviceAccount = require("./googleSheet.json");

// Configure a JWT auth client.
const auth = new google.auth.JWT(serviceAccount.client_email, null, serviceAccount.private_key, ["https://www.googleapis.com/auth/spreadsheets.readonly"]);

// Create a Google Sheets API client.
const sheets = google.sheets({ version: "v4", auth });

app.get("/api/spreadsheet", async (req, res) => {
	try {
		const spreadsheetId = "1ZdEwhQTcMf1YkWqzubV7HMPBaWtuTlllt-jXAs4eTzg";
		const range = "Sheet1!C7:G26"; // Adjust the range as needed

		const response = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range,
		});

		const rows = response.data.values;
		if (rows.length) {
			res.status(200).json(rows);
		} else {
			res.status(404).send("No data found.");
		}
	} catch (error) {
		console.error("Error fetching data from Google Sheets:", error);
		res.status(500).send("Internal Server Error");
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
