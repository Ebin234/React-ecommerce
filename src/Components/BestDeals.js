import React, { useEffect } from 'react';
import { bestDealsData } from '../utils/constants';
import { AiFillStar } from "react-icons/ai";
import { decreaseCount, setProducts } from "../utils/ProductSlice";
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../utils/CartSlice';

function BestDeals() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (data.length == 0) {
            dispatch(setProducts(bestDealsData));
        }
    }, [])

    const data = useSelector((store) => store.products.items)

    const onclickHandler = (item) => {
        if (item.count !== 0) {
            dispatch(decreaseCount(item.name));
            dispatch(setCart(item));
        }
    }
    return (

        <div className='best-deals-body'>
            <div className='best-deals'>
                <h2>Best Deals</h2>
                <h3>View all</h3>
            </div>
            <div className='best-container'>
                {data?.map((item, index) => {
                    return (
                        <div className='best-prod' key={index} onClick={() => onclickHandler(item)}>
                            <div className='prod-img'>
                                <img src={item.url} alt="pic1" />
                            </div>
                            <div className='best-prod-details'>
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    ({item.count})
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BestDeals;
