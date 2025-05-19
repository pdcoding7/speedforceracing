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
    console.log('Attempting to fetch spreadsheet data...');
    console.log('Spreadsheet ID:', process.env.SPREADSHEET_ID);
    console.log('Range:', 'Div 1!C7:H26');

    // First, let's get the sheet names to verify what's available
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
    });

    console.log('Available sheets:', spreadsheet.data.sheets.map(sheet => sheet.properties.title));

    // Try to fetch the data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Div 1!C7:H26',
    });

    if (!response.data.values) {
      console.log('No data found in the specified range');
      return res.json([]);
    }

    // Log the first few rows of data
    console.log('Data received successfully');
    console.log('First 5 rows of data:');
    response.data.values.slice(0, 6).forEach((row, index) => {
      console.log(`Row ${index + 1}:`, row);
    });

    res.json(response.data.values);
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      code: error.code,
      errors: error.errors,
      response: error.response?.data,
      stack: error.stack
    });

    // Check if it's an authentication error
    if (error.code === 401) {
      console.error('Authentication error. Please check your service account credentials.');
    }

    res.status(500).json({ 
      error: 'Failed to fetch data from Google Sheets',
      details: error.message,
      code: error.code
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 