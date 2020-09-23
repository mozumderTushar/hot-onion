import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import FoodItems from './components/FoodItems/FoodItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Banner />
            <FoodItems />
            <Services/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
