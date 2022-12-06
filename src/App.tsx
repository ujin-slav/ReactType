import React from 'react';
import Form from './components/Form';
import UserList from './components/UserList';

export interface IAuto {
  name: string,
  engine: string,
  power:number
}

function App() {

  const lustAuto:IAuto[] = [
    {
      name: "Volvo",
      engine: "1.6",
      power:100
    },
    {
      name: "VW",
      engine: "2.0",
      power:200
    },
    {
      name: "Opel",
      engine: "2.6",
      power:300
    }
  ]

  return (
    <div >
      {/* <UserList/> */}
      <Form listAuto={lustAuto}/>
    </div>
  );
}

export default App;
