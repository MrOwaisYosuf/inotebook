import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotesState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NotesState>
        <Router>
          <Navbar />
          <Alert message="This is an alert message!" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NotesState>
    </>
  );
}

export default App;
