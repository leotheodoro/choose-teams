import React, { useState, useCallback, FormEvent } from 'react';
import {
  Title,
  HeaderTitle,
  Form,
  Team,
  LevelBadge,
  Players,
  Player,
  Teams,
  SortTeams,
} from './styles';

interface Player {
  id: string;
  name: string;
  level: number;
  prime: boolean;
}

const Home: React.FC = () => {
  const [newPlayer, setNewPlayer] = useState<Player>({
    id: `_${Math.random().toString(36).substr(2, 9)}`,
    name: '',
    level: 0,
    prime: false,
  });
  const [players, setPlayers] = useState<Player[]>([]);
  const [firstTeam, setFirstTeam] = useState<Player[]>([]);
  const [secondTeam, setSecondTeam] = useState<Player[]>([]);
  const [firstAverage, setFirstAverage] = useState(0);
  const [secondAverage, setSecondAverage] = useState(0);

  const handleAddPlayer = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (players.length < 10) {
        setPlayers([...players, newPlayer]);
      }

      setNewPlayer({
        id: `_${Math.random().toString(36).substr(2, 9)}`,
        name: '',
        level: 0,
        prime: false,
      });
    },
    [newPlayer, players],
  );

  const handleDeletePlayer = useCallback(
    player_id => {
      const playersFiltered = players.filter(player => player.id !== player_id);

      setPlayers(playersFiltered);
    },
    [players],
  );

  const handleSortTeams = useCallback(() => {
    if (players.length === 10) {
      setFirstTeam([]);
      setSecondTeam([]);
      setFirstAverage(0);
      setSecondAverage(0);
      const playersSorted = players.sort((a, b) =>
        a.level < b.level ? 1 : -1,
      );

      const team1 = [];
      const team2 = [];

      for (let i = 0; i < playersSorted.length / 2 - 1; i += 2) {
        if (Math.floor(Math.random() * 2) % 2 === 0) {
          team1.push(playersSorted[i]);
          team2.push(playersSorted[i + 1]);
        } else {
          team1.push(playersSorted[i + 1]);
          team2.push(playersSorted[i]);
        }
      }

      for (
        let i = playersSorted.length - 1;
        i >= playersSorted.length / 2 + 1;
        i -= 2
      ) {
        if (Math.floor(Math.random() * 2) % 2 === 0) {
          team1.push(playersSorted[i]);
          team2.push(playersSorted[i - 1]);
        } else {
          team1.push(playersSorted[i - 1]);
          team2.push(playersSorted[i]);
        }
      }

      const initialValue = 0;
      const sum1 = team1.reduce(
        (accumulator, currentValue) => accumulator + currentValue.level,
        initialValue,
      );
      const sum2 = team2.reduce(
        (accumulator, currentValue) => accumulator + currentValue.level,
        initialValue,
      );

      if (sum1 === sum2) {
        if (Math.floor(Math.random() * 10) % 2 === 0) {
          team1.push(playersSorted[playersSorted.length / 2 - 1]);
          team2.push(playersSorted[playersSorted.length / 2]);
        } else {
          team1.push(playersSorted[playersSorted.length / 2]);
          team2.push(playersSorted[playersSorted.length / 2 - 1]);
        }
      } else if (sum1 - sum2) {
        team1.push(playersSorted[playersSorted.length / 2 - 1]);
        team2.push(playersSorted[playersSorted.length / 2]);
      } else {
        team1.push(playersSorted[playersSorted.length / 2]);
        team2.push(playersSorted[playersSorted.length / 2 - 1]);
      }

      const average1 = Math.round(
        team1.reduce(
          (accumulator, currentValue) => accumulator + currentValue.level,
          initialValue,
        ) / 5,
      );
      const average2 = Math.round(
        team2.reduce(
          (accumulator, currentValue) => accumulator + currentValue.level,
          initialValue,
        ) / 5,
      );

      setFirstTeam(team1);
      setSecondTeam(team2);
      setFirstAverage(average1);
      setSecondAverage(average2);
    }
  }, [players]);

  return (
    <>
      <HeaderTitle>Gerando o time pro mix</HeaderTitle>
      <Form onSubmit={handleAddPlayer}>
        <input
          value={newPlayer.name}
          placeholder="Digite o nome do jogador"
          onChange={e => setNewPlayer({ ...newPlayer, name: e.target.value })}
        />
        <input
          value={newPlayer.level}
          type="number"
          placeholder="Level"
          onChange={e => {
            const level = Number(e.target.value);
            if (level >= 0 && level <= 20) {
              setNewPlayer({ ...newPlayer, level });
            }
          }}
        />
        <button type="submit">Adicionar</button>
      </Form>
      <SortTeams onClick={handleSortTeams}>Sortear Times</SortTeams>

      {players.length === 10 && (
        <Teams>
          {firstTeam.length === 5 && (
            <Team>
              <Title>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Time 1 <LevelBadge>{firstAverage}</LevelBadge>
              </Title>
              {firstTeam.map(player => (
                <Player key={player.id}>
                  {player.name}
                  <LevelBadge>{player.level}</LevelBadge>
                </Player>
              ))}
            </Team>
          )}

          {secondTeam.length === 5 && (
            <Team>
              <Title>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Time 1 <LevelBadge>{secondAverage}</LevelBadge>
              </Title>
              {secondTeam.map(player => (
                <Player key={player.id}>
                  {player.name}
                  <LevelBadge>{player.level}</LevelBadge>
                </Player>
              ))}
            </Team>
          )}
        </Teams>
      )}

      {players.length > 0 && (
        <Players>
          <Title>Players</Title>
          <div>
            {players.map(player => (
              <Player key={player.id}>
                {player.name}
                <LevelBadge>{player.level}</LevelBadge>
                <button
                  type="button"
                  onClick={() => handleDeletePlayer(player.id)}
                >
                  x
                </button>
              </Player>
            ))}
          </div>
        </Players>
      )}
    </>
  );
};

export default Home;
