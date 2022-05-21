import React, { Fragment } from 'react';
import './App.css';
import { PlayerCounter } from './features/players/components/PlayerCounter'
import { PlayerList } from './features/players/components/PlayerList'
import { PlayerForm } from './features/players/components/PlayerForm'

const defaultPlayers = [
  {
    id: 1,
    first_name: "Armando",
    last_name: "Ortega",
  },
  {
    id: 2,
    first_name: "Alexis",
    last_name: "Ortega",
  },
  {
    id: 3,
    first_name: "Alec",
    last_name: "Ortega",
  },
];

function App() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [players, setPlayers] = React.useState(defaultPlayers);
  const addPlayer = () => {
    const player = {
      id: players.length + 1,
      first_name: firstName,
      last_name: lastName
    };
    const allPlayers = [...players];
    allPlayers.push(player);
    setPlayers(allPlayers);
    setFirstName('');
    setLastName('');
  }
  return (
    <React.Fragment>
      <PlayerCounter counter={players.length} />
      <PlayerList players={players} />
      <PlayerForm
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        onClick={() => addPlayer()}
      />
    </React.Fragment>
  );
}

export default App;
