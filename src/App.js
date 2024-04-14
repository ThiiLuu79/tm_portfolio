import logo from './img/logo.svg';

import './css/custom.css';
import './css/general.css';
import './css/style.css';

import Head from './components/MainComponents/Head.js';
import Header from './components/MainComponents/Header.js';
import Home from './components/Home.js';
import Footer from './components/MainComponents/Footer.js';


function App() {
  return (
    <div className="App">
        <Head/>
        <Header/>

        <Home/>

        <Footer/>
    </div>
  );
}

export default App;
