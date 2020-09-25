import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import fakeData from '../../fakeData/foodItems'
import './FoodItems.css'

const FoodItems = () => {
    const [cart, setCart] = useContext(CartContext)
    
  
    const [active, setActive] = useState({
        lunch: true,
        breakfast: false,
        dinner: false
    })

    const [foodItems, setFoodItems] = useState([])
    useEffect(() => {
        const newCart = fakeData.filter(pd => pd.category === "lunch")
        setFoodItems(newCart)
    }, [])

    const handleCart = (category) => {
        
        const newCart = fakeData.filter(pd => pd.category === category)
        setFoodItems(newCart)
        if (category === "breakfast") {
            const temp = {
                lunch: false,
                breakfast: true,
                dinner: false
            }
            setActive(temp)
        }
        else if (category === "lunch") {
            const temp = {
                lunch: true,
                breakfast: false,
                dinner: false
            }
            setActive(temp)
        }
        else {
            const temp = {
                lunch: false,
                breakfast: false,
                dinner: true
            }
            setActive(temp)
        }
    }
    
    return (
        <div className="container">
            <div className="my-3 itemsNameBtn">
                {
                    active.breakfast ? <button className="btn shadow-none active" onClick={() => handleCart("breakfast")}>Breakfast</button> :
                        <button className="btn shadow-none" onClick={() => handleCart("breakfast")}>Breakfast</button>
                }
                {
                    active.lunch ? <button className="btn shadow-none active" onClick={() => handleCart("lunch")}>Lunch</button> :
                        <button className="btn shadow-none" onClick={() => handleCart("lunch")}>Lunch</button>
                }
                {
                    active.dinner ? <button className="btn shadow-none active" onClick={() => handleCart("dinner")}>Dinner</button> :
                        <button className="btn shadow-none" onClick={() => handleCart("dinner")}>Dinner</button>
                }
            </div>
            <div className="row">
                {
                    foodItems.map(item => (
                        <div key={item.id} className="col-md-4 px-5 my-3 cart-container">
                            <Link to={"/details/" + item.id} style={{ textDecoration: "none" }}>
                                <div className="cart-item">
                                    <img src={item.img} alt="" className="img-fluid w-50" />
                                    <h5>{item.name}</h5>
                                    <h3>{item.price}</h3>  
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            {
               
               cart.length !== 0 ? <Link to="/delivery"><button className="btn btn-danger">Checkout Your Food</button></Link> :
               <button className="btn btn-danger" disabled>Checkout Your Food</button>
                
            }
        </div>
    );
};

export default FoodItems;