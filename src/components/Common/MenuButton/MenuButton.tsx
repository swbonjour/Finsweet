import React from 'react'
import { Link } from 'react-router-dom';

import "./MenuButton.scss"

export type ButtonProps = {
    mt?: string;
    ml?: string;
    translateX?: string;
}

export default function MenuButton({ mt, ml, translateX }: ButtonProps) {
  return ( 
    <Link to="/Finsweet/menu" className="button__link"><button className="button" style={{marginTop: mt, marginLeft: ml, transform: `translateX(${translateX})`}}>View Menu</button></Link>
  )
}
