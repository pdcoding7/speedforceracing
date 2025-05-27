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
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin: 0;
  
  th {
    background-color: #000;
    color: white;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 1rem;
    border: none;
    text-align: center;
    font-size: 0.9rem;
    img {width:4rem;}
    
    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }

    @media (max-width: 755px) {
     img {width:3rem;}
     padding: 0.5rem;
    }
  }
  
  td {
    vertical-align: middle;
    padding: 0.5rem;
    border-bottom: 1px solid #f0f0f0;
    text-align: center;
    transition: background-color 0.2s ease;
    font-size: 0.9rem;

    @media (max-width: 755px) {
      padding: 0.05rem;
    }
  }
  
  tr {
    &:last-child td {
      border-bottom: none;
    }
  }

  tbody tr:nth-child(odd) {
    background-color: #fff;
  }

  tbody tr:nth-child(even) {
    background-color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const DriverStandingsTable = styled(StyledTable)`
  th {
    @media (max-width: 755px) {
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        display: none;
      }
    }
  }
  
  td {
    @media (max-width: 755px) {
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        display: none;
      }
    }
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
  background-color: #B4009E;
`;

const TeamCell = styled.td`
  font-weight: 500;
  color: #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white !important;
  width: 5.5rem;
  padding: 0.5rem;
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
    @media (max-width: 755px) {
      width: 80%;
    }
  }
`;

const PolesCell = styled.td`
  font-weight: 500;
  color: #000;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
`;

const TabRow = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const Tab = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#fff' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  white-space: nowrap;
  position: relative;

  &:hover {
    color: #fff;
    border-bottom: 3px solid #fff;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
    margin: 0;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

const TabContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  animation: ${props => props.active ? 'fadeIn 0.3s ease-in-out' : 'none'};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const getTeamImage = (teamName) => {
  if (!teamName) return null;
  
  const teamNameLower = teamName.toLowerCase().trim();
  switch (teamNameLower) {
    case 'alpine':
      return '/images/team-alp.png';
    case 'ferrari':
      return '/images/team-fer.png';
    case 'aston martin':
      return '/images/team-am.png';
    case 'mercedes':
      return '/images/team-merc.png';
    case 'williams':
      return '/images/team-will.png';
    case 'visa rb':
       return '/images/team-visa.png';
    case 'haas':
      return '/images/team-haas.png';
    case 'redbull':
      return '/images/team-rb.png';
    case 'mclaren':
      return '/images/team-mcl.png';
    case 'kick sauber':
      return '/images/team-kick.png';
    default:
      return null;
  }
};

const StandingsTable = () => {
  const [standings, setStandings] = useState([]);
  const [teamStandings, setTeamStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

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
        console.log('Full data received:', data);
        
        // Split the data into driver and team standings
        const driverData = data.slice(0, 20); // First 20 rows for driver standings
        const teamData = data.slice(20); // Remaining rows for team standings
        
        console.log('Driver data:', driverData);
        console.log('Team data:', teamData);
        
        setStandings(driverData);
        setTeamStandings(teamData);
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
    <section className="section" id="standingsNew">
      <SectionTitle sectionTitle="Standings"></SectionTitle>
      
      <TabsContainer>
        <TabRow>
          <Tab 
            active={activeTab === 1} 
            onClick={() => setActiveTab(1)}
          >
            Division 1
          </Tab>
          <Tab 
            active={activeTab === 2} 
            onClick={() => setActiveTab(2)}
          >
            Division 2
          </Tab>
        </TabRow>
        <TabRow>
          <Tab 
            active={activeTab === 3} 
            onClick={() => setActiveTab(3)}
          >
            Division 3
          </Tab>
          <Tab 
            active={activeTab === 4} 
            onClick={() => setActiveTab(4)}
          >
            Division 4
          </Tab>
        </TabRow>
      </TabsContainer>

      <TabContent active={activeTab === 1}>
        <DivisionTitle division="Division 1" typeOf="- Driver Standings" />
        <DriverStandingsTable striped bordered hover responsive>
          <thead>
            <tr>
              <th>
                <img 
                  src="/images/sftlogo-2white.png" 
                  alt="SFR Logo" 
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
                <TeamCell>
                  {getTeamImage(row.team) && (
                    <img 
                      src={getTeamImage(row.team)} 
                      alt={row.team} 
                      title={row.team}
                    />
                  )}
                </TeamCell>
                <WinsCell>{row[2] === '0' ? '' : row[2]}</WinsCell>
                <PodiumsCell>{row[3] === '0' ? '' : row[3]}</PodiumsCell>
                <PolesCell>{row[5]}</PolesCell>
                <FLCell>{row[4]}</FLCell>
                <PointsCell>{row[1]}</PointsCell>
              </tr>
            ))}
          </tbody>
        </DriverStandingsTable>

        <DivisionTitle division="Division 1" typeOf="- Team Standings" />
        <StyledTable striped bordered hover responsive>
          <thead>
            <tr>
              <th>
                <img 
                  src="/images/sftlogo-2white.png" 
                  alt="SFR Logo" 
                />
              </th>
              <th>Team</th>
              <th>Wins</th>
              <th>Podiums</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teamStandings && teamStandings.length > 0 ? (
              teamStandings.map((row, rowIndex) => {
                console.log('Rendering team row:', row);
                return (
                  <tr key={rowIndex}>
                    <PositionCell>{rowIndex + 1}</PositionCell>
                    <TeamCell>
                      {getTeamImage(row[2]) && (
                        <img 
                          src={getTeamImage(row[2])} 
                          alt={row[2]} 
                          title={row[2]}
                        />
                      )}
                    </TeamCell>
                    <WinsCell>{row[4]}</WinsCell>
                    <PodiumsCell>{row[5]}</PodiumsCell>
                    <PointsCell>{row[3]}</PointsCell>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No team standings data available</td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TabContent>

      <TabContent active={activeTab === 2}>
        <h3>Division 2 Content Coming Soon</h3>
      </TabContent>

      <TabContent active={activeTab === 3}>
        <h3>Division 3 Content Coming Soon</h3>
      </TabContent>

      <TabContent active={activeTab === 4}>
        <h3>Division 4 Content Coming Soon</h3>
      </TabContent>
    </section>
  );
};

export default StandingsTable; 