import React from 'react'
import styled from 'styled-components'
import OutComp from './OutComp'

const Output = ({tip, bill, people}) => {
  return (
    <Div>
        <div>
            <OutComp tip={tip} bill={bill} people={people} text='Tip Amount'/>
            <OutComp tip={tip} bill={bill} people={people} text='Total'/>
        </div>
        <button>RESET</button>
    </Div>
  )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    background: var(--waterloo);
    padding: 4rem;
    button{
        height: 4.8rem;
        border-radius: 5px;
        background: var(--tulip-tree);
        color: var(--waterloo);
        text-align: center;
        font-size: 2rem;
        cursor: pointer;
        &:hover{
            background: var(--purple-heart);
        }
    }
`

export default Output