import React from "react"

import { SvgSelector } from './SvgSelector'

export const SearchInput = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: 'center',
      position: 'relative',
      width: '830px',
      height: '44px',
      borderRadius: '22px',
      background: '#EBEBEB',
    }}>
      <input style={{
        padding: '12px 23px',
        backgroundColor: 'transparent',
        width: '730px',
        outline: 'none',
        border: 'none',
       }} placeholder="Search" ></input>

      <SvgSelector name="Loupe" style={{
        position: 'absolute',
        width: '18px',
        height: '18px',
        right: 18,
      }}/>
    </div>
  )
}
