import './css/custom.css';
import './css/general.css';
import './css/style.css';

import Header from './components/MainComponents/Header/Header';
import Home from './components/HomeComponents/Home/Home';
import Work from './components/WorkComponent/Work/Work';
import Academics from './components/AcademicsComponent/Academics/Academics';
import Personals from './components/PersonalsComponent/Personals/Personals';
import ArtGallery from './components/ArtGalleryComponent/ArtGallery/ArtGallery';
import PhotoGallery from './components/PhotoGalleryComponent/PhotoGallery/PhotoGallery';
import Footer from './components/MainComponents/Footer/Footer';
import NotFound from './components/NotFoundComponent/NotFound/NotFound';

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
