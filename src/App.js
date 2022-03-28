import React from 'react';   
import './css/App.css'
import './css/Plugin.css'
import Loading from './components/Loading'
import Header from './components/Header';
import Banner from './components/Banner';
import IntroText from './components/IntroText';
import Ability from './components/Ability';
import Feedback from './components/Feedback';
import Post from './components/Post';
import Process from './components/Process';
import Footer from './components/Footer';
import TalkSomething from './components/TalkSomething';
function App() {   
 return (  
  <div>
    <Loading />
        {/* Nav Bar */}
        <Header />
        {/* End Nav Bar */}
        <main className="main-root">
          <div id="dsn-scrollbar">
            <Banner />
            <div className="wrapper">
              <IntroText />
              <Ability />  
              <TalkSomething />
              <Feedback />
              <Post />
              <Process /> 
            </div>
            <Footer />
            
          </div>
        </main>
        {/* Wait Loader */}
        <div className="wait-loader">
          <div className="loader-inner">
            <div className="loader-circle">
              <div className="loader-layer" />
            </div>
          </div>
        </div>
        {/* // Wait Loader */}
        {/* cursor */}
        {/* End cursor */}
        {/* Optional JavaScript */}
      </div>
 );
}

export default App;
