import React from 'react';
import Logo from "../Assets/logo-6 1.png";
import { GrFormDown } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase-config';
import { Link, useNavigate } from 'react-router-dom';

function Mid() {
    const count = useSelector((store) => store.cart.totalCount)
    const navigate = useNavigate()

    onAuthStateChanged(auth, (user) => {
        if (!user) navigate('/login')
    })
    return (
        <div className='mid'>
            <Link to={"/"} className='logo'>
                <img src={Logo} alt="logo" />
            </Link>
            <div className='searchContainer'>
                <div className='drop'>
                    <p>Classifieds</p>
                    <GrFormDown />
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search' />
                    <FaSearch className='searchicon' />
                </div>
            </div>
            <div className='end'>
                <div className='icons'>
                    <MdOutlineFavoriteBorder className='ic' />
                    <Link to={"/cart"} className='cart ic'>
                        <BiShoppingBag /> <span>{count}</span>
                    </Link>

                    <CgProfile className='ic pro' />
                </div>
                <Link className='logout' to={"/login"} onClick={() => signOut(auth)}>Logout</Link>
                <div className='classifields'>
                    <p>Classifieds</p>
                </div>
            </div>
        </div>
    )
}

export default Mid;

