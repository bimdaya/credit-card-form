import React from 'react'
import DropDownMenu from './components/DropDownMenu'
import RegisterCardForm from './RegisterCardForm'

function App() {
  return (
    <div className="App">

      <DropDownMenu />
      <RegisterCardForm firstName={'Bim'} />
    </div>
  );
}

export default App;
