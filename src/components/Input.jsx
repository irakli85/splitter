import React from 'react'
import InpComp from './InpComp'
import SelectTip from './SelectTip'
import dollar from '/images/dollar.svg'
import people from '/images/people.svg'
import styled from 'styled-components'

const Input = ({billValue, onBillChange, onTipChange, onCustomChange, customTip, peopleValue, onPeopleChange}) => {
  return (
    <div>
        <InpComp 
          label='Bill' 
          borderColor='#26C2AE' 
          img={dollar} 
          billValue={billValue} 
          onBillChange={onBillChange}
           />
        <SelectTip onTipChange={onTipChange} onCustomChange={onCustomChange} customTip={customTip}/>
        <Div>
            <InpComp label='Number of People' borderColor='#26C2AE' img={people} billValue={peopleValue} onBillChange={onPeopleChange}/>
            {peopleValue === '' && <Span>Can’t be zero</Span>}
        </Div>
    </div>
  )
}

const Div = styled.div`
    position: relative;
`

const Span = styled.span`
    color: #E17457;
    font-size: 1.6rem;
    position: absolute;
    top: 0;
    right: 0;
`

export default Input