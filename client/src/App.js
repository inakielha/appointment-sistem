
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import LogIn from './components/logIn/logIn';
import CreateAccount from './components/createUser/createAccount';
import Landing from './components/landing/landing';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
