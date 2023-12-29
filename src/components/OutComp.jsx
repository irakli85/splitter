import React from 'react'
import styled from 'styled-components'

const OutComp = ({text, tip, people, bill}) => {
    let tipAmount;
    if(bill > 0 || tip > 0 || people > 0){
        tipAmount = ((bill*tip)/100)/people
    }
  return (
    <Container>
        <Div>
            <p>{text}</p>
            <span>/ person</span>
        </Div>
        <strong>{tipAmount ? `${tipAmount.toFixed(2)}$` : '0$'}</strong>
    </Container>
  )
}

const Container  = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 9.7rem;
    strong{
        color: var(--tulip-tree);
        text-align: right;
        font-size: 4.8rem;
        letter-spacing: -1px;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    p{
        color: var(--white);
        font-size: 1.6rem;
    }
    span{
        color: var(--gray);
        font-size: 1.3rem;
    }
`



export default OutComp