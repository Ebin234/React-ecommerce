import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from 'react-icons/io5';
import week1 from "../Assets/week/week1.png";
import week2 from "../Assets/week/week2.png";
import week3 from "../Assets/week/week3.png";
import week4 from "../Assets/week/week4.png";

function WeekProducts() {
    return (
        <div className='week-products-container'>
            <div className='week-data'>
                <h2>Classified Products on the week</h2>
                <div className='arrow-container'>
                    <IoIosArrowForward className='arrow' />
                    <IoIosArrowBack className='arrow' />
                </div>
                <div className='explore'>
                    Explore
                    <IoIosArrowForward className='arrow-but' />
                </div>
            </div>
            <div className="week-prod">
                <div className="week-img">
                    <img src={week1} alt="week-poster" />
                    <p>Urgent Selling</p>
                </div>
                <div className='week-prod-data'>
                    <div className='week-prod-header'>
                        <p>Holy Stone HS470 Foldable GPS RC Drone</p>
                    </div>
                    <div className='week-prod-bottom'>
                        <p className='week-price'>$300.98</p>
                        <p className='week-loc'> <IoLocationSharp /> Cape Hadstone</p>
                    </div>
                </div>
            </div>
            <div className="week-prod">
                <div className="week-img">
                    <img src={week2} alt="week-poster" />
                </div>
                <div className='week-prod-data'>
                    <div className='week-prod-header'>
                        <p>Marshall Stockwell II Portable Speaker</p>
                    </div>
                    <div className='week-prod-bottom'>
                        <p className='week-price'>$300.98</p>
                        <p className='week-loc'> <IoLocationSharp /> Cape Hadstone</p>
                    </div>
                </div>
            </div>
            <div className="week-prod">
                <div className="week-img">
                    <img src={week3} alt="week-poster" />
                    <p>Urgent Selling</p>
                </div>
                <div className='week-prod-data'>
                    <div className='week-prod-header'>
                        <p>2020 Ford Mustang GT Fastback</p>
                    </div>
                    <div className='week-prod-bottom'>
                        <p className='week-price'>$22,822</p>
                        <p className='week-loc'> <IoLocationSharp /> Cape Hadstone</p>
                    </div>
                </div>
            </div>
            <div className="week-prod">
                <div className="week-img">
                    <img src={week4} alt="week-poster" />
                </div>
                <div className='week-prod-data'>
                    <div className='week-prod-header'>
                        <p>Iphone 11 pro max</p>
                    </div>
                    <div className='week-prod-bottom'>
                        <p className='week-price'>$76.87</p>
                        <p className='week-loc'> <IoLocationSharp /> Cape Hadstone</p>
                    </div>
                </div>
            </div>
            <div className="week-prod">
                <div className="week-img">
                    <img src={week1} alt="week-poster" />
                    <p>Urgent Selling</p>
                </div>
                <div className='week-prod-data'>
                    <div className='week-prod-header'>
                        <p>Holy Stone HS470 Foldable GPS RC Drone</p>
                    </div>
                    <div className='week-prod-bottom'>
                        <p className='week-price'>$300.98</p>
                        <p className='week-loc'> <IoLocationSharp /> Cape Hadstone</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeekProducts
