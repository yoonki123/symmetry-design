import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Test from './Test';
import Modals from './pages/Modals';
import TrainingCustomerDashboard from './components/TrainingCustomerDashboard/TrainingCustomerDashboard';
import Layout from './pages/Layout/Layout';
import Surveys from './pages/Surveys';
import Survey from './components/Surveys/Survey';
import SurveyV2 from './components/Surveys/SurveyV2';
import SurveyV3 from './components/Surveys/SurveyV3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/training" element={<TrainingCustomerDashboard />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route element={<Layout />}>
          <Route path="/surveys/1" element={<Survey />} />
          <Route path="/surveys/2" element={<SurveyV2 />} />
          <Route path="/surveys/3" element={<SurveyV3 />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/main" element={<div></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
