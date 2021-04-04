import styled from 'styled-components/macro';

export const SliderWrapper = styled.div`
width: 45vw;
@media screen and (max-width: 768px) {
  width: 100%;
}
`;

export const Image = styled.img`
width: 45vw;

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

export const SliderNav =styled.nav`
display: flex;
justify-content: space-between;
position: relative;
top: -10rem;
`;

export const SliderArrow = styled.div`
background: var(--color-primary);
padding: 1rem;
display: flex;
`;