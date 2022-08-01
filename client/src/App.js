
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import LogIn from './components/logIn/logIn';
import CreateAccount from './components/createUser/createAccount';
import Landing from './components/landing/landing';
import Calendar from './components/calendar/calendar';
import NavBar from './components/navBar/navbar';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/createAccount' element={<><NavBar/><CreateAccount /></>} />
        <Route path='/landing' element={<><NavBar/><Landing /></>} />
        <Route path='/landing/home/:id' element={<><NavBar/><Calendar/></>}/>
      </Routes>
    </div>
  );
}

export default App;
