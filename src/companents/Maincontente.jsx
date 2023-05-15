import React from 'react'
import './Maincontente.css'
import car from './My-image/ddd1.jpeg';
export const Maincontente = () => {
    return (
        <div>
            <div className='Maincontente'>
                <div className='box1'>
                    <div className='IMG'>
                        <img src={car} alt="this is car image" />
                    </div>
                </div>
                <div className='box2'>
                    <h2>hey ! i am ratan yadav</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis tenetur aliquid iusto quaerat! Magni, quisquam?</p>

                    <h2>thanks for visit</h2>
                </div>

            </div>
        </div>

    )
}
export default Maincontente