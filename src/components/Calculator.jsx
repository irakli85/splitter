import React, { useState } from 'react'
import Output from './Output'
import Input from './Input'
import styled from 'styled-components'

const Calculator = () => {
    const [bill, setBill] = useState('')
    const [tip, setTip] = useState(0)
    const [customTip, setCustomTip] = useState('')
    const [people, setPeople] = useState(1)    

    const handleBill = (e) => {
        setBill(+e.target.value)
    }

    const handleTip = (e) => {
        setTip(+e.target.value)
        setCustomTip('')        
    }

    const handleCustomTip = (e) => {
        setCustomTip(+e.target.value)
        setTip(0)        
    }

    const handlePeople = (e) => {
        e.target.value > 0 ? setPeople(+e.target.value) : setPeople('')
    }

  return (
    <Main>
        <Input 
            customTip={customTip} 
            billValue={bill}
            peopleValue={people} 
            onBillChange={handleBill} 
            onTipChange={handleTip} 
            onCustomChange={handleCustomTip}
            onPeopleChange={handlePeople}
        />
        <Output tip={tip} bill={bill} people={people}/>        
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