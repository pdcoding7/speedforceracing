require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Check for required environment variables
const requiredEnvVars = ['GOOGLE_CLIENT_EMAIL', 'GOOGLE_PRIVATE_KEY', 'SPREADSHEET_ID'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  console.error('Please create a .env file in the backend directory with these variables');
  process.exit(1);
}

// Google Sheets setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

// API endpoint to fetch data from Google Sheets
app.get('/api/sheets-data', async (req, res) => {
  try {
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Get the sheet names
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
    });
    console.log('Available sheets:', spreadsheet.data.sheets.map(sheet => sheet.properties.title));

    // Fetch both values and team names
    const [valuesResponse, teamResponse] = await Promise.all([
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 1!C7:H26',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 1!AA7:AA26',
      })
    ]);

    const values = valuesResponse.data.values || [];
    const teams = teamResponse.data.values || [];

    console.log('Team data received:', teams); // Debug log for team data

    // Combine the data
    const combinedData = values.map((row, index) => {
      const teamName = teams[index] ? teams[index][0] : '';
      console.log(`Row ${index + 1} team:`, teamName); // Debug log for each row's team
      return {
        ...row,
        team: teamName
      };
    });

    console.log('First few rows of combined data:', combinedData.slice(0, 3));
    res.json(combinedData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 