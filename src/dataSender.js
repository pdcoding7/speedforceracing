import React, { useEffect, useState } from "react";
import axios from "axios";

const DataSender = () => {
	const textColor = { color: "black" };
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("/api/spreadsheet");
				console.log("Fetched data:", response.data); // Log the fetched data
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError("Error fetching data");
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1 style={textColor}>Google Spreadsheet Data</h1>
			{error && <p>{error}</p>} {/* Display error message if any */}
			<ul>
				{data.length > 0 ? (
					data.map((row, index) => <li key={index}>{row.join(", ")}</li>)
				) : (
					<p>No data available</p> // Display message if no data
				)}
			</ul>
		</div>
	);
};

export default DataSender;
