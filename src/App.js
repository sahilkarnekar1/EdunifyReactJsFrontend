import logo from './logo.svg';
import './App.css';
import AddSchool from './addSchool';
import ShowSchools from './showSchools';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
<>
<Router>
  <Routes>
    <Route path="/" element={<AddSchool/>} />
    <Route path="/showSchools" element={<ShowSchools/>} />
    </Routes>
</Router>

</>
  );
}

export default App;
