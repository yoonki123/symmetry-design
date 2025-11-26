import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Test from './Test'
import Modals from './pages/Modals'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modals" element={<Modals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;