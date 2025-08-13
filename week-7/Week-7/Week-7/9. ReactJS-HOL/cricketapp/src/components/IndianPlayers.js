import React from 'react';

// 🔹 Destructuring-based odd team component
export function OddPlayers({ first, third, fifth }) {
  return (
    <div>
      <h3>Odd Team Players</h3>
      <ul>
        <li>First: {first}</li>
        <li>Third: {third}</li>
        <li>Fifth: {fifth}</li>
      </ul>
    </div>
  );
}

// 🔹 Destructuring-based even team component
export function EvenPlayers({ second, fourth, sixth }) {
  return (
    <div>
      <h3>Even Team Players</h3>
      <ul>
        <li>Second: {second}</li>
        <li>Fourth: {fourth}</li>
        <li>Sixth: {sixth}</li>
      </ul>
    </div>
  );
}

// 🔹 Main component
const IndianPlayers = () => {
  // Destructuring players
  const players = [
    "Virat", "Dhoni", "Rohit", "Rahul", "Jadeja", "Shami"
  ];

  const [first, second, third, fourth, fifth, sixth] = players;

  // 👇 THIS is the code you asked to be included here
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

  // No export needed here — just a local constant
  const IndianPlayersMerged = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players Component</h2>

      <OddPlayers first={first} third={third} fifth={fifth} />
      <EvenPlayers second={second} fourth={fourth} sixth={sixth} />

      <h3>Merged T20 + Ranji Trophy Players</h3>
      <ul>
        {IndianPlayersMerged.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
