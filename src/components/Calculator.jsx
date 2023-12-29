import React, { useState } from 'react'
import Output from './Output'
import Input from './Input'
import styled from 'styled-components'

const Calculator = () => {
    const [bill, setBill] = useState('')
    const [tip, setTip] = useState(0)

    const handleBill = (e) => {
        setBill(+e.target.value)
    }

    const handleTip = (e) => {
        setTip(+e.target.value)        
    }

  return (
    <Main>
        <Input billValue={bill} onBillChange={handleBill} onTipChange={handleTip}/>
        <Output/>        
    </Main>
  )
}

const Main = styled.main`
    display: flex;
    gap: 4.8rem;
    background-color: var(--white);
    padding: 3.2rem 4.8rem;
    margin-top: 8.8rem;
    border-radius: 2.5rem;
    box-shadow: 0px 3.2rem 4.3rem 0px rgba(79, 166, 175, 0.20);
`

export default Calculator