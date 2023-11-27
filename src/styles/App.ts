import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.div`
  background-color: #f7f5f7;
`;

// export const Body = styled.div`
//   position: relative;
//   padding: calc((100vh - 263px) / 2) 0;
// `;

export const Emoji = styled.div`
  width: 211px;
  margin: 0 auto 10px;
`;

export const Head = styled.div`
  padding: 40px;
`;

export const H2 = styled.h2`
  font-family: 'SLEIGothicTTF';
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SLEIGothicTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SLEIGothicTTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
