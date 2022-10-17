import React from "react"

export const Svg = ({ children, ...props }) => {
  return (
    <div { ...props } >
      {children}
    </div>
  )
}