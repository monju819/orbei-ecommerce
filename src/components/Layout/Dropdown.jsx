import React from 'react'

const Dropdown = ({className,children,dropref}) => {
  return (
    <div className={className} ref={dropref} > {children} </div>
  )
}

export default Dropdown