import Test from './Test';
import Portfolio from './pages/Portfolio';
import Question from './pages/Question';
import ExerciseList from './pages/ExerciseList';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/question" element={<Question />} />
        <Route path="/exercise" element={<ExerciseList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;