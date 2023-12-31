import React from 'react'
import styled from 'styled-components'

const Button = ({value, onTipChange}) => {
  return (
    <Btn value={value} onClick={onTipChange}>{`${value}%`}</Btn>
  )
}

const Btn = styled.button`
    width: 11.7rem;
    height: 4.8rem;
    border-radius: 5px;
    background: var(--waterloo);
    color: #FFF;
    text-align: center;
    font-size: 2.4rem;
    cursor: pointer;
    &:hover{
      background: var(--purple-heart);
      color: var(--waterloo);
      transition: all 0.2s ease-in-out;
    }
`

export default Button