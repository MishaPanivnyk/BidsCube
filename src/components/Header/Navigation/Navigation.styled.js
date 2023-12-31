import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 33px;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fbfbfb;
  font-family: Stolzl;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
export const Hamburger = styled.img`
  display: none;
  @media screen and (max-width: 1280px) {
    display: block;
  }
`;
