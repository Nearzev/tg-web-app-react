import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './header.css'
const Header = () => {
    const {user} = useTelegram();


    return (
        <div className={'header'}>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;