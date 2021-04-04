import styled, { createGlobalStyle } from 'styled-components/macro';

const globalStyle = createGlobalStyle`
* {
  font-family: 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
  margin: 0;
  padding: 0;

}



html {
  font-size: 100%;
  --color-primary: #BA2329;
  --color-secondary: #007DDB;
  --color-white:#ffffff;
  --antd-wave-shadow-color: #007DDB;
}

@media (max-width: 991px) {
  html {
    font-size: 16px;
  }
}

@media (max-width: 400px) {
  html {
    font-size: 14px;
  }
}

ul,
li {
  list-style: none;
}

a{
  color: inherit;
}
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  background: var(--color-primary);
  white-space: nowrap;
  padding: ${({ big }) => (big ? '1rem 4rem' : '0.6rem 1rem')};
  color: var(--color-white);
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    filter: saturate(50%);
  }

  @media screen and (max-width: 768px) {
    min-width: 15rem;
  }
`;

export default globalStyle;
