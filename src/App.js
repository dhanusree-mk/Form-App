import "./App.css";
import EmployeeFeedbackForm from "./components/EmployeeRegistrationForm";
import StudentRegistrationForm from "./components/StudentRegistrationForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Form Management</h1>

      <div className="tabs">
        <Link to="/student" className="tab-link">
          Student Registration
        </Link>
        <Link to="/employee" className="tab-link">
          Employee Registration
        </Link>
      </div>

      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/student" />} />
          <Route path="/student" element={<StudentRegistrationForm />} />
          <Route path="/employee" element={<EmployeeFeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
