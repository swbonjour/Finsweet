import React from 'react'

import "./MenuButton.scss"

export type ButtonProps = {
    mt?: string;
    ml?: string;
    translateX?: string;
}

export default function MenuButton({ mt, ml, translateX }: ButtonProps) {
  return ( 
    <button className="button" style={{marginTop: mt, marginLeft: ml, transform: `translateX(${translateX})`}}>View Menu</button>
  )
}
