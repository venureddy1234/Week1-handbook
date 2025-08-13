import React from 'react';

const ListofPlayers = () => {

  const players = [
    { name: "Virat", score: 85 },
    { name: "Dhoni", score: 67 },
    { name: "Rohit", score: 72 },
    { name: "Rahul", score: 54 },
    { name: "Jadeja", score: 77 },
    { name: "Shami", score: 40 },
    { name: "Gill", score: 88 },
    { name: "Hardik", score: 62 },
    { name: "Bumrah", score: 43 },
    { name: "Pant", score: 76 },
    { name: "Surya", score: 91 }
  ];


  const lowScorers = players.filter(player => player.score <= 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} - <span>{item.score}</span>
          </li>
        ))}
      </ul>

      <h2>Players with Score ≤ 70</h2>
      <ul>
        {lowScorers.map((item, index) => (
          <li key={index}>
            Mr. {item.name} - <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
