import './App.css';
import { useEffect } from 'react';
// import Header from './components/layouts/header';
import { BrowserRouter as Router } from "react-router-dom";
import webFont from 'webfontloader';
import Footer from './components/layouts/footer';

export const App = () => {

  useEffect(() => {

    webFont.load({

       google: { 
         families: ['Roboto', 'Droid Sans', 'Droid Serif']
       }

    })

  },[]);

  return (
    <>
      <Router>
      <Footer />
      </Router>      
    </>
  )
}

export default App;
