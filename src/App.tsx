import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DropDownMenu from './components/DropDownMenu'
import RegisterCardForm from './RegisterCardForm'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <DropDownMenu />
          <Routes>
            <Route path="/" element={<RegisterCardForm firstName={'Bim'} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
