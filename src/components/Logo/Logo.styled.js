import styled from 'styled-components';

export const Link = styled.a`
cursor: pointer;
  & img {
    width: 186px;
    height: 46px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover img {
    transform: scale(1.2);
  }
`;

export const LogoContainer = styled.div`

`;
