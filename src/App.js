import './css/custom.css';
import './css/general.css';
import './css/style.css';

import Header from './components/MainComponents/Header.jsx';
import Home from './components/Home.jsx';
import Work from './components/Work.jsx';
import Academics from './components/Academics.jsx';
import Personals from './components/Personals.jsx';
import ArtGallery from './components/ArtGallery.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import Footer from './components/MainComponents/Footer.jsx';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Router>
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
