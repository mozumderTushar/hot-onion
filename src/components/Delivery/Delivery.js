import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import './Delivery.css'

const Delivery = () => {
    const [cart, setCart] = useContext(CartContext)
    console.log(cart);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => { }
    const handleMinus = () => { }
    const handlePlus = () => { }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 delivery-form px-md-5 px-5 mb-5">
                    <div className="ml-5">
                        <h5>Edit Delivery Address</h5>
                        <hr />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="px-md-5">
                        <input name="deliver" ref={register} defaultValue="Deliver to Door" />
                        <input name="address" ref={register({ required: true })} defaultValue="107 flat no" />
                        {errors.address && <small>Address is required</small>}
                        <input name="flat" ref={register({ required: true })} placeholder="flat suit or floor" />
                        {errors.flat && <small>flat suit or fllor is required</small>}
                        <input name="business" ref={register} placeholder="Business Name" />
                        <input name="mobile" ref={register({ required: true })} placeholder="Contact Number" />
                        {errors.mobile && <small>Contact Number is required</small>}
                        <button type="submit" className="btn btn-danger mt-3">Save and Continue</button>
                    </form>
                </div>
                <div className="col-md-6 text-justify ">
                    <div className="mx-5">
                        <h6>From Gulsan Plaza Restura GPR</h6>
                        <small>Arriving in 20-30mins</small>
                        <p>107 flat no</p>
                        <div className="row bg-item-card d-flex align-items-center my-3 p-md-2  ">
                            <div className="col-md-3 col-3">
                                <img src={cart.img} alt="" className="img-fluid w-100" />
                            </div>
                            <div className="col-md-4 col-4 ">
                                <small>{cart.name}</small>
                                <br />
                                <h3 className="text-danger">${cart.price * cart.quantity}</h3>
                            </div>
                            <div className="col-md-5 col-5 plus-minus">
                                <span style={{ backgroundColor: '#fff' }}><button onClick={() => handleMinus(cart.id, cart.quantity)}>-</button> {cart.quantity} <button onClick={() => handlePlus(cart.id, cart.quantity)}>+</button></span>
                            </div>
                            <div>

                            </div>

                        </div>
                        <div className=" price-container">
                            <p>Subtotal + {cart.quantity} item : ${cart.price * cart.quantity}</p>
                        </div>
                        <div className="price-container">
                            <p>Tax : $1.5</p>
                        </div>
                        <div className=" price-container">
                            <p>Delivery Fee:$2</p>
                        </div>
                        <div className="price-container">
                            <h5>Total: {cart.price * cart.quantity + 1.5 + 2}</h5>
                        </div>
                        <Link to="/order"><button className="btn btn-danger w-100 mb-3">Place order</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;