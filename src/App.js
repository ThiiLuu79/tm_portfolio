import './css/custom.css';
import './css/general.css';
import './css/style.css';

import Head from './components/MainComponents/Head.js';
import Header from './components/MainComponents/Header.js';
import Home from './components/Home.js';
import Work from './components/Work.js';
import Academics from './components/Academics.js';
import Personals from './components/Personals.js';
import ArtGallery from './components/ArtGallery.js';
import PhotoGallery from './components/PhotoGallery.js';
import Footer from './components/MainComponents/Footer.js';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Router>
      <Head/>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Work' element={<Work/>}></Route>
          <Route path='/Academics' element={<Academics/>}></Route>
          <Route path='/Personals' element={<Personals/>}></Route>
          <Route path='/ArtGallery' element={<ArtGallery/>}></Route>
          <Route path='/PhotoGallery' element={<PhotoGallery/>}></Route>
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
