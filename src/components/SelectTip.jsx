import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const SelectTip = ({onTipChange, onCustomChange, customTip}) => {
  return (
    <Div>
        <p>Select Tip %</p>
        <BtnDiv>
            <Button onTipChange={onTipChange} value={5}/>
            <Button onTipChange={onTipChange} value={10}/>
            <Button onTipChange={onTipChange} value={15}/>
            <Button onTipChange={onTipChange} value={25}/>
            <Button onTipChange={onTipChange} value={50}/>
            <TipInput onChange={onCustomChange} placeholder='Custom' value={customTip}/>
        </BtnDiv>
    </Div>
  )
}

const Div = styled.div`
    margin-top: 4rem;
    p{
        color: var(--bright);
        font-size: 1.6rem;
        margin-bottom: 1.6rem;
    }
`

const BtnDiv = styled.div`
    display: grid;
    gap: 1.4rem;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 4rem;
    
`
const TipInput  = styled.input`
    width: 11.7rem;
    height: 4.8rem;
    border-radius: 5px;
    background: var(--distant);
    color: var(--waterloo);
    font-size: 2rem;
    text-align: right;
    padding-inline: 1.7rem;
    &::placeholder{
        color:rgba(0, 71, 75, 0.35);
    }
    &:focus{
        outline: 2px solid var(--tulip-tree);
    }        
`

export default SelectTip