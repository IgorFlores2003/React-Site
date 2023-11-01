import * as React from 'react';
import './App.css';
import './componentes/header/Header';
import Header from './componentes/header/Header';
import Filminho from './componentes/Filminho/Filminho';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import './pages/Home/image/Mo.jpeg'

function App() {
  return(

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='TimeLine' element={<Header/>}/>
      <Route path='Filminho' element={<Filminho/>}/>
  </Routes>
  </BrowserRouter>
  
)}

export default App;
