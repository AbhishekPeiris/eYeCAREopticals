import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/' element={<HomeScreen />} />  

        </Routes>

        <Footer />
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
