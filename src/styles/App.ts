import styled, { createGlobalStyle } from 'styled-components';

export const Span = styled.span`
  font-family: 'SLEIGothicTTF';
`;

export const Border = styled.div`
  border: 1px solid #dfe0e5;
  border-radius: 3px;
`;

export const Emoji = styled.div`
  width: 100px;
  margin: 0 auto 10px;
`;

export const AppContainer = styled.div`
  position: relative;
  padding: calc((100vh - 263px) / 2) 0;
  background-color: #f7f5f7;
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SLEIGothicTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SLEIGothicTTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
