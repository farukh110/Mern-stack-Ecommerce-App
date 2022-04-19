import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import webFont from 'webfontloader';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import HomePage from './pages/home';
import ProductDetails from './pages/ProductDetails';
import About from './pages/AboutUs';

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
      <BrowserRouter>
        
        {/* start header */}
        <Header />
        {/* end header */}
        
        {/* start pages */}

        <Routes>

        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/about' element={<About />} />

        </Routes>
        {/* end pages */}
      
        {/* start footer */}
        <Footer />
        {/* start footer */}
      </BrowserRouter>
    </>
  )
}

export default App;
