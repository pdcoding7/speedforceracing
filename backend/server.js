require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://www.speedforceracing.co.uk', 'https://speedforceracing.co.uk', 'https://speedforceracing.netlify.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept'],
  credentials: true
}));
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

// Add authentication test
auth.getClient()
  .then(client => {
    console.log('Successfully authenticated with Google');
  })
  .catch(err => {
    console.error('Authentication error:', {
      message: err.message,
      code: err.code,
      status: err.status,
      errors: err.errors
    });
  });

const sheets = google.sheets({ version: 'v4', auth });

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API endpoint to fetch data from Google Sheets
app.get('/api/sheets-data', async (req, res) => {
  try {
    // Log environment variable status (without exposing sensitive data)
    console.log('Environment check:', {
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSpreadsheetId: !!process.env.SPREADSHEET_ID,
      spreadsheetId: process.env.SPREADSHEET_ID,
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL
    });

    // Test authentication before making the request
    try {
      await auth.getClient();
      console.log('Authentication successful before making request');
    } catch (authError) {
      console.error('Authentication failed before making request:', {
        message: authError.message,
        code: authError.code,
        status: authError.status
      });
      throw authError;
    }

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Get the sheet names
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
    });
    console.log('Available sheets:', spreadsheet.data.sheets.map(sheet => sheet.properties.title));

    // Fetch both driver and team standings data for Div 1, Div 2, Div 3, and Div 4
    const [div1DriverValuesResponse, div1TeamValuesResponse, div1TeamResponse, 
          div2DriverValuesResponse, div2TeamValuesResponse, div2TeamResponse,
          div3DriverValuesResponse, div3TeamValuesResponse, div3TeamResponse,] = await Promise.all([
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 1!C7:H26',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 1!A29:F38',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 1!AD7:AD26',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 2!C7:H26',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 2!A29:F38',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 2!AD7:AD26',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 3!C7:H26',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 3!A29:F38',
      }),
      sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Div 3!AD7:AD26',
      }),
    ]);

    const div1DriverValues = div1DriverValuesResponse.data.values || [];
    const div1TeamValues = div1TeamValuesResponse.data.values || [];
    const div1Teams = div1TeamResponse.data.values || [];
    const div2DriverValues = div2DriverValuesResponse.data.values || [];
    const div2TeamValues = div2TeamValuesResponse.data.values || [];
    const div2Teams = div2TeamResponse.data.values || [];
    const div3DriverValues = div3DriverValuesResponse.data.values || [];
    const div3TeamValues = div3TeamValuesResponse.data.values || [];
    const div3Teams = div3TeamResponse.data.values || [];

    // Combine the driver data for Div 1
    const div1DriverData = div1DriverValues.map((row, index) => {
      const teamName = div1Teams[index] ? div1Teams[index][0] : '';
      return {
        ...row,
        team: teamName
      };
    });

    // Combine the team data for Div 1
    const div1TeamData = div1TeamValues.map(row => ({
      ...row,
      team: row[0]
    }));

    // Combine the driver data for Div 2
    const div2DriverData = div2DriverValues.map((row, index) => {
      const teamName = div2Teams[index] ? div2Teams[index][0] : '';
      return {
        ...row,
        team: teamName
      };
    });

    // Combine the team data for Div 2
    const div2TeamData = div2TeamValues.map(row => ({
      ...row,
      team: row[0]
    }));

    // Combine the driver data for Div 3
    const div3DriverData = div3DriverValues.map((row, index) => {
      const teamName = div3Teams[index] ? div3Teams[index][0] : '';
      return {
        ...row,
        team: teamName
      };
    });

    // Combine the team data for Div 3
    const div3TeamData = div3TeamValues.map(row => ({
      ...row,
      team: row[0]
    }));

    // Combine all datasets in the correct order
    const combinedData = [
      ...div1DriverData,  // First 20 rows: Div 1 driver standings
      ...div1TeamData,    // Next rows: Div 1 team standings
      ...div2DriverData,  // Next 20 rows: Div 2 driver standings
      ...div2TeamData,    // Next rows: Div 2 team standings
      ...div3DriverData,  // Next 20 rows: Div 3 driver standings
      ...div3TeamData,    // Next rows: Div 3 team standings
    ];

    console.log('First few rows of combined data:', combinedData.slice(0, 3));
    res.json(combinedData);
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      status: error.status,
      errors: error.errors
    });
    
    // Send more detailed error information
    res.status(500).json({ 
      error: 'Failed to fetch data',
      details: {
        message: error.message,
        code: error.code,
        status: error.status
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 