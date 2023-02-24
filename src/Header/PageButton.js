import React from 'react'

const PageButton = (props) => {
  return (
    <div className="btn">
      <span className={props.isBold ? 'pageButtonBold' : ''}>
        {props.name}
      </span>
    </div>
  )
}
export default PageButton
