import SectionTitle from "./SectionTitle.js";
import React, { useState, useEffect } from 'react';
import { Table, Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import DivisionTitle from "./DivisionTitle.js";

const StandingsContainer = styled(Container)`
  padding: 2rem 0;
  background-color: #0000;
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.h2`
  color: #000;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: #000;  
    }
`;

const StyledTable = styled(Table)`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  
  th {
    background-color: #000;
    color: white;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 1rem;
    border: none;
    text-align: center;
    font-size: 0.9rem;
    
    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }

    @media (max-width: 707px) {
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        display: none;
      }
    }
  }
  
  td {
    vertical-align: middle;
    padding: 1rem;
    border-bottom: 1px solid #f0f0f0;
    text-align: center;
    transition: background-color 0.2s ease;
    font-size: 0.9rem;

    @media (max-width: 707px) {
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        display: none;
      }
    }
  }
  
  tr {
    &:hover {
      background-color: #f8f9fa;
    }
    
    &:last-child td {
      border-bottom: none;
    }
  }

  tbody tr:nth-child(odd) {
    background-color: #f8f9fa;
  }

  tbody tr:nth-child(even) {
    background-color: white;
  }

  tbody tr:hover {
    background-color: #e9ecef;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  text-align: center;
  padding: 2rem;
  background-color: #f8d7da;
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const PositionCell = styled.td`
  font-weight: 600;
  color: #000
`;

const DriverCell = styled.td`
  font-weight: 500;
  color: #000
`;

const PointsCell = styled.td`
  font-weight: 600;
  color: #000
`;

const WinsCell = styled.td`
  font-weight: 600;
  color: #000;
`;

const PodiumsCell = styled.td`
  font-weight: 500;
  color: #000
`;

const FLCell = styled.td`
  font-weight: 500;
  color: #fff;
  background-color: #800080;
`;

const TeamCell = styled.td`
  font-weight: 500;
  color: #000
`;

const PolesCell = styled.td`
  font-weight: 500;
  color: #000;
`;

const StandingsTable = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        console.log('Attempting to fetch data...');
        const response = await fetch('http://localhost:5000/api/sheets-data', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Data received:', data);
        console.log('First row sample:', data[0]);
        setStandings(data);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) {
    return (
      <LoadingSpinner>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </LoadingSpinner>
    );
  }

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  return (
    <section className="section">
      <SectionTitle sectionTitle="Standings"></SectionTitle>
      <DivisionTitle division="Division 1" typeOf="- Driver Standings" />
      <StyledTable striped bordered hover responsive>
        <thead>
          <tr>
            <th style={{ width: '50px' }}>
              <img 
                src="/images/sftlogo-2white.png" 
                alt="SFR Logo" 
                style={{ 
                  width: '4rem', 
                }} 
              />
            </th>
            <th>Driver</th>
            <th>Team</th>
            <th>Wins</th>
            <th>Podiums</th>
            <th>Poles</th>
            <th>FL</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <PositionCell>{rowIndex + 1}</PositionCell>
              <DriverCell>{row[0]}</DriverCell>
              <TeamCell></TeamCell>
              <WinsCell>{row[2]}</WinsCell>
              <PodiumsCell>{row[3]}</PodiumsCell>
              <PolesCell>{row[5]}</PolesCell>
              <FLCell>{row[4]}</FLCell>
              <PointsCell>{row[1]}</PointsCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </section>
  );
};

export default StandingsTable; 