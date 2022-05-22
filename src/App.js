import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar/Navbar';
import ForgotPassword from './pages/Login/ForgotPassword';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='forgotpassword' element={<ForgotPassword/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
