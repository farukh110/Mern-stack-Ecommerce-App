import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import webFont from 'webfontloader';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import HomePage from './pages/home';
import About from './pages/AboutUs';
import ProductDetails from './pages/ProductDetails';
import ProductPage from './pages/Products';
import SearchBar from './components/controls/Search/index';
import LoginRegister from './pages/Users';

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
        
        {/* start header */}
        <Header />
        {/* end header */}
        
        {/* start pages */}

         <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/product/:id' component={ProductDetails} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={ProductPage} />
            <Route path='/products/:keyword' component={ProductPage} />
            <Route exact path='/search' component={SearchBar} />
            <Route exact path='/login' component={LoginRegister} />
        </Switch>

        {/* end pages */}
      
        {/* start footer */}
        <Footer />
        {/* start footer */}
      </Router>
    </>
  )
}

export default App;
