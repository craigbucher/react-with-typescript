// React with TypeScript Crash Course: https://www.youtube.com/watch?v=jrKcJxF0lAU

import React, { useState } from 'react';
import './App.css';
import List from './components/list'
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      url: string
      note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/977.png"
    }
  ])
  
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      {/* passing prop 'people' defined as the variable 'people' in useState */}
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
