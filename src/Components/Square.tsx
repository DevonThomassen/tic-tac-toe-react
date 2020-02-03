import React from 'react';

interface Props {
  readonly value: string | null
  onClick: () => void
}

/* Old class Square 
class Square extends Component<Props, State> {

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }

}
*/

/*
  ! Replaced Class Component with a Function Component
  * Function components are easier to write only have a render method and don't have their own state
*/

const Square = (props: Props) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

export default Square;
