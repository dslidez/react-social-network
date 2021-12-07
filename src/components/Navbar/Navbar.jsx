import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>PROFILE</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.active}>USERS</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active}>MESSAGES</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>NEWS</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>MUSIC</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}>SETTINGS</NavLink>

        </div>
        <div className={s.friends}>
            <NavLink to='/friends' activeClassName={s.active}><h3>MY FRIENDS</h3></NavLink>
        </div>
        <div className={s.friend1}>
            <NavLink to='/friend1' activeClassName={s.active}>
                <img src='https://99px.ru/sstorage/1/2017/02/image_11502170945009680947.gif' />
                <img src='https://klike.net/uploads/posts/2019-06/1560329641_2.jpg' />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU' />
            </NavLink>
        </div>
    </nav>
}

export default Navbar;