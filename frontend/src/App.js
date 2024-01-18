import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<HomeScreen />} />  

        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
