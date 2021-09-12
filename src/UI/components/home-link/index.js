import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export const HomeLink = () => {
    return (
        <Link to='/' className='house-link'>
            <i className="icon-house"></i>
        </Link>
    );
};
