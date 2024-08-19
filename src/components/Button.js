import React from "react";

const Button = ({ text, onclick, href, className, type = 'button'}) => {
    if (href) {
        return (
            <a href={href} className={className}>
                {text}
            </a>
            )
    }
    
    return (
        <button className={className} onClick={onclick} type={type}>
            {text}
        </button>
    )
}

export default Button