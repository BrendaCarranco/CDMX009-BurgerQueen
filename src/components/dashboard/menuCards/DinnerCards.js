import React, { useState, useEffect } from 'react';
import menu from '../../../menu/menu';

export const useDinner = () => {
    const [dinner, setDinner] = useState([]);
    useEffect(() => {
        let dinnerMenuUrl = 'https://api.sheety.co/8a96244f24eccc075711d9f26c56f9c6/burgerQueen/comidas';
        fetch(dinnerMenuUrl)
            .then(res => res.json())
            .then(data => {
                setDinner(data.comidas);
            });
    }, []);
    return dinner;

};

const DinnerCards = ({ addOrder }) => {
    let dinner = menu.comidas;

    return (
        <div className='scroll-cards'>
            <ul>
                <li>
                    {dinner.map((food) => (
                        <div className='col m6 space' key={food.id}>
                            <div className='card general' onClick={() => { addOrder(food); }}>
                                <div className="card-image row food-image">
                                    <img src={`/img/products/${food.id}.png`} className='col m6 img-icon item' alt='food-img' />
                                </div>
                                <div className='card-content white-text center-align'>
                                    <div>
                                        <p className='info' name='item'>{food.item}</p>
                                        <p className='info' name='price'>$ {food.price}.00  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </li>
            </ul>
        </div >
    );
};

export default DinnerCards;