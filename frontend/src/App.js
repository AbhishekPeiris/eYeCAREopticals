import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomeScreen />} />  

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
