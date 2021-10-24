import React, { Children } from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btnPirmary', 'btnOutline'];
const SIZES = ['btnMedium', 'btnLarge'];

export const Button = ({
    children, type, onclick, buttonStyle, buttonSize
}) => {
    const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]


    return (
        <Link to='/home' className='btnMobile'>
            <button className={`btn $(checkBtnStyle) $(checkBtnSize)`}>
                {children}
            </button>
        </Link>
    )
}