import React from 'react'
import './About.css'
import Desc from './My-image/ddd2.jpeg'
export const About = () => {
    return (
        <div className='main-container'>
            <div className='abo'>
                <div className='pro'><i>Profile</i></div>
                <div className='info'>
                    <div className='ime'>
                        <img className='qqq' src={Desc} alt="" />
                    </div>
                    <div className='add'>
                        <div className='name'>
                            <h3>Name:</h3><h5>Ratan lal yadav</h5>
                        </div>
                        <div className='email'>
                            <h3>Email:</h3><h5>ratandagar332712@gmail.com</h5>
                        </div>
                        <div className='mobile'>
                            <h3>Mobile:</h3><h5>8209270731</h5>
                        </div>
                        <div className='city'>
                            <h3>City</h3><h5>Sikar</h5>
                        </div>
                        <div className='viewpdf'>

                            <a1 href="#">View pdf</a1>
                        </div>
                        <div className='dowpdf'>
                            <a1 href="#">Download pdf</a1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='abc'>
                <div className=''></div>
            </div>
        </div>
    )
}
