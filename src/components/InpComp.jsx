import React from 'react'
import styled from 'styled-components'


const InpComp = ({label, borderColor, img, billValue, onBillChange}) => {
  return (
    <Div border={borderColor} url={img}>
        <label>{label}</label>
        <input type='number' placeholder={0} value={billValue} onChange={onBillChange}/>
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    label{
        color: var(--bright);
        font-size: 16px;
    }

    input{
        border-radius: 5px;
        background: var(--distant);
        color: var(--waterloo);
        font-size: 2.4rem;
        text-align: right;
        margin-top: 6px;
        padding-inline: 1.7rem;
        &::placeholder{
            color:rgba(0, 71, 75, 0.35);
        }
        &:focus{
            outline: 2px solid ${(props) => props.border};
        }
        background-image: url(${(props) => props.url});
        background-repeat: no-repeat;
        background-position: top 50% left 2rem;        
    }
`

export default InpComp