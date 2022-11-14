import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
}

:root {
    --bckg-color: #040720;
    --primary-blue: #477385;
    --primary-blue-light: #83D2E4;
    --primary-green: #279331;
    --primary-green-light: #8BCF21;
    --black30: rgba(0, 0, 0, .35)
}
ul, ol, li {
    list-style: none;
}

body {
    background-color: var(--bckg-color);
}
`;
