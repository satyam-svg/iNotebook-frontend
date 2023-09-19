import './App.css';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import { NoteState } from './Context/notestate';
import {
  BrowserRouter as Router,
  Routes, // Import Routes
  Route,
} from 'react-router-dom';
function App() {
  return (
    <>
    <NoteState >
      <Router>
      <Navbar/>
        <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
