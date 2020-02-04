import React from 'react';

/*
  ! Replaced Class Component with a Function Component
  * Function components are easier to write only have a render method and don't have their own state
*/

interface Props {
  readonly value: string | null
  onClick: () => void
}

const Square = (props: Props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square;
