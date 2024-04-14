import './css/custom.css';
import './css/general.css';
import './css/style.css';

import Head from './components/MainComponents/Head.js';
import Header from './components/MainComponents/Header.js';
import Home from './components/Home.js';
import Work from './components/Work.js';
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
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
