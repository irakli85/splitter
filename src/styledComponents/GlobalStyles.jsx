
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --white: #ffffff;
        --distant:#F3F9FA;
        --bright:#5E7A7D;
        --pelorous:#547878;
        --gray: #7F9D9F;
        --waterloo:#00474B;
        --aviary:#C5E4E7;
        --purple-heart:#9FE8DF;
        --tulip-tree:#26C2AE;
        --valencia:#E17457;
        --flame-pea:#E17052;        
    }

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: none;
      font-family: 'Space Mono', monospace;
      font-size: 62.5%;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    body{
      width: 100%;
      height: 100vh;  
      background: var(--aviary);
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 3rem;     
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`;

export default GlobalStyles;