import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingScreen from './screens/BookingScreen';
import EditUserScreen from './screens/EditUserScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ServicesScreen from './screens/ServicesScreen';
import EyeGlassesScreens from './screens/EyeGlassesScreens';

function App() {
  return (
    <div>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/bookings' element={<BookingScreen />} />
          <Route path='/editprofile/:userId' element={<EditUserScreen />} />
          <Route path='/aboutus' element={<AboutUsScreen />} />
          <Route path='/services' element={<ServicesScreen />} />
          <Route path='/eyeglasses' element={<EyeGlassesScreens />} />
          <Route path='/' element={<HomeScreen />} />  

        </Routes>

        <Footer />
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
