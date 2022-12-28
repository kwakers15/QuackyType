import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    transition: all 0.25s linear;
    text-shadow: ${({ theme }) => theme.textShadow};
  }
  .canvas {
    align-items: center;
    display: grid;
    gap: 0.5rem;
    grid-auto-flow: row;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    padding: 1rem;
    transition: padding-top .125s;
    width: 100vw;
  }
  .header {
    position: relative;
    display: block;
    align-items: center;
    justify-content: center;
    padding-bottom: 3%;
    top: 0;
    left:0;
    width: 100%;
    text-align: center;
  }
  .sub-header {
    color: ${({ theme }) => theme.textTypeBox};
    opacity: 0.5;
    border-right: 2px solid;
    animation: blinkingCursor 2.2s infinite;
    @keyframes blinkingCursor{
      0%		{ border-right-color: ${({ theme }) => theme.stats};}
      25%		{ border-right-color: transparent;}
      50%		{ border-right-color: ${({ theme }) => theme.stats};}
      75%		{border-right-color: transparent;}
      100%	{border-right-color: ${({ theme }) => theme.stats};}
    }
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  h1 {
    color: ${({ theme }) => theme.title};
    opacity: 0.9;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  h3 {
    margin-right: 10px;
  }
  h4 {
    margin-right: 10px;
    opacity: 0.7;
  }
  .hidden-input {
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .input-box {
    display: block;
    max-width: 1000px;
    height: 140px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 10%;
    @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 3) {
      top; 200px;
      width: 60%;
    }
  }
`