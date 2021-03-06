import React, { createContext, useState } from 'react';
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
import NotFound from './components/NotFound/NotFound';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Delivery from './components/Delivery/Delivery';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const CartContext = createContext();


function App() {
  const [cart, setCart] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <CartContext.Provider value={[cart, setCart, loggedInUser, setLoggedInUser]}>
{/* <h3>Name: {cart.name}</h3>
<h3>quantity: {cart.quantity}</h3> */}


      <Router>
        <Switch>
          <Route path="/details/:foodId">
            <FoodDetails/>
          </Route>
          <PrivateRoute path="/delivery">
           <Delivery/>
          </PrivateRoute>
          <Route path="/order">
            <PlaceOrder/>
          </Route>
          <Route path="/login">
            <Login/>
           </Route>
          <Route exact path="/">
            <Banner />
            <FoodItems />
            <Services/>
            <Footer/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
