import React, { useContext, useEffect, useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/foodItems'
import './FoodDetails.css'
import { CartContext } from '../../App';



const FoodDetails = () => {
    const {foodId} = useParams()
    const [quantity, setQuantity] = useState(1)
    const [data, setData] = useState({})
    const [cart, setCart] = useContext(CartContext)
    useEffect(()=>{
        const foodItem = fakeData.find(item => item.id === foodId)
        setData(foodItem)
    },[])
    

  
 
    const addToCart = (quantity) => {
        const newData = {...data}
        newData.quantity = quantity
        setData(newData)
        setCart(newData)
    }
    // console.log(cart);
    

    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-6 text-justify px-md-5 p-4">
                    <div className="food-container px-md-5">
                    <h3>hi there: {cart.name}</h3>
                    <h3>hi length: {cart.length}</h3>
                        <h2>{data.name}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus voluptate a fuga nisi voluptates provident vitae, illum..</p>
                    
                    <div className="foodQuantity">
                        <h3>{data.price}</h3>
                        <span><button onClick={() => quantity !== 1 && setQuantity(quantity - 1)}>-</button> {quantity} <button onClick={() => setQuantity(quantity + 1)}>+</button></span>
                        </div>
                        <button className="btn btn-danger mt-3 px-5" onClick={() => { addToCart(quantity,data) }}><FontAwesomeIcon icon={faShoppingCart} />Add</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="px-md-5">
                        <img src={data.img} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;