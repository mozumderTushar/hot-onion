import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './PlaceOrder.css'


const PlaceOrder = () => {
    return (
        <div> 
            <Header/>  
        <div className="container">
        <div className="row">
          <div className="col-md-7 mt-5">
            <div className="p-md-5">
              <img src="https://i.ibb.co/4VJcb0s/map-01d5d8df.png" alt="map" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-5 text-justify p-md-5 my-5">
            <div className="px-2 py-3 order-container">
              <div className="w-50">
                  
                <img src="https://i.ibb.co/b1JhS6J/Group-1151.png" alt="rider" className="img-fluid w-50" />
              </div>
              <div className="bg-light px-2">
                <h5 className="text-danger">Your Location</h5>
                <p>107 Road No 8</p>
                <h5>Shop Address</h5>
                <p>Gulsan Plaza Restura GPR</p>
              </div>
              <div>
                <h4 className="text-danger">09:30</h4>
                <p>Estimated Delivery Time</p>
              </div>
              <div className="bg-light px-2">
                <h5 className="text-danger">Hamim</h5>
                <p>Your Rider</p>
              </div>
              <div>
                <p>Thanks For Your Order</p>
                <button className="btn btn-danger w-100">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
};

export default PlaceOrder;