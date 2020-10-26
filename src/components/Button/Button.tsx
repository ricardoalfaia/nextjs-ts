import React from 'react'

type Props = {
  handleClick: () => void
  label: string
}

const Button: React.FC<Props> = ({ handleClick, label }) => {
  return (
    <button data-testid="btn-1" onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button
