import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="container ">
                <div className="row ">
                    <div className="col-md-6  my-5">
                        <img src="https://i.ibb.co/CK8b1w4/logo.png" className="footer-img" alt="" />
                    </div>
                    <div className="col-md-3  my-5">
                        <p>About Online Food</p>
                        <p>Read Our Blog</p>
                        <p>Sign Up To delivery</p>
                        <p>Add Your Restaurent</p>
                    </div>
                    <div className="col-md-3  my-5">
                        <p>Get Help</p>
                        <p>Read FAQS</p>
                        <p>View All cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
                <div className="row pb-3 px-5">
                    <div className="col-md-8">
                        <small>Copyright &copy; 2020 online food</small>
                    </div>
                    <div className="col-md-4 d-flex flex-row">
                        <span className="mr-3">Privacy police.</span>
                        <span className="mr-3">Terms of use</span>
                        <span>Pricing</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;