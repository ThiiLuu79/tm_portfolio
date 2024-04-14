import logo from './img/logo.svg';

import './css/App.css';
import './css/custom.css';
import './css/general.css';
import './css/style.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Head from './components/Head.js';

function App() {
  return (
    <div className="App">
        <Head/>
        <Header/>

        

        <Footer/>
    </div>
  );
}

export default App;
