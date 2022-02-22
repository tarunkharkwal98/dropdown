import React from 'react';
import DropDownV2 from '../src/components/dropdown';

const items = [
  {
    id: 1,
    value: 'Pulp Fiction',
  },
  {
    id: 2,
    value: 'The Prestige',
  },
  {
    id: 3,
    value: 'Blade Runner 2049',
  },
];

function App() {
  return (
    <div className="container">
      <DropDownV2 items={items}/>
      <br/>
      <DropDownV2 items={items}/>
    </div>
  );
}

export default App;
