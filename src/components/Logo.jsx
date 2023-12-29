import React from 'react'
import logo from '/images/logo.svg'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Div>
        <img src={logo} alt="logo" />
    </Div>
  )
}

const Div = styled.div`
    margin-top: 16.3rem;
    display: flex;
    justify-content: center;
`

export default Logo