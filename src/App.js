import './css/custom.css';
import './css/general.css';
import './css/style.css';

import Header from './components/mainComponents/Header';
import Home from './components/Home';
import Work from './components/Work';
import Academics from './components/Academics';
import Personals from './components/Personals';
import ArtGallery from './components/ArtGallery';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/mainComponents/Footer';
import NotFound from './components/mainComponents/NotFound';

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
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
