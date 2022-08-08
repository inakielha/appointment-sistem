
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import CreateAccount from './components/logInAll/createUser/createAccount';
import Landing from './components/home/landing/landing';
import Calendar from './components/calendarAll/calendar/calendar';
import NavBar from './components/navBar/navbar';
import LogIn from './components/logInAll/logIn/logIn';
import Welcome from './components/logInAll/welcome/welcome';
import CreateCustomer from './components/logInAll/createCustomer/createCustomer';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/welcome' element={<Welcome/>}></Route>
        <Route path='/createCustomer' element={<CreateCustomer/>} />
        <Route path='/createAccount' element={<><CreateAccount /></>} />
        <Route path='/landing' element={<><NavBar/><Landing /></>} />
        <Route path='/landing/home/:id' element={<><NavBar/><Calendar/></>}/>
      </Routes>
    </div>
  );
}

export default App;
