import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root{
       
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 3rem;
        width: 100%;
        height: 100vh;
    }
`;