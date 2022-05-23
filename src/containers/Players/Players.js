import React from 'react';
import "./Players.css";

import { PlayerCounter } from '../../features/players/components/PlayerCounter';
import { PlayerList } from '../../features/players/components/PlayerList';
import { PlayerForm } from '../../features/players/components/PlayerForm';

import axios from 'axios';

export function Players() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [players, setPlayers] = React.useState([]);
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

    React.useEffect(() => {
      getPlayers();
    }, []);

    const getPlayers = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/players");
        setPlayers(data.data);
      } catch (error) {
        console.log(error);
        setPlayers([]);
      }
    };

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
