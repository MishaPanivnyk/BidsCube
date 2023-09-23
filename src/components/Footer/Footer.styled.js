import styled from 'styled-components';
export const FooterContainer = styled.footer`
  padding: 46px 0;
  background: #007afb;
`;
export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const FooterDescContainer = styled.div``;
export const FooterDesc = styled.p`
  color: #fbfbfb;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 300px;
  margin-top: 29px;
`;
export const FooterContactContainer = styled.div``;
export const FooterContactTitle = styled.h2`
  color: #fbfbfb;
  font-family: 'Stolzl';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 23px;
`;
export const FooterContactInfo = styled.a`
  color: #fbfbfb;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  cursor: pointer;
  & svg {
    width: 12px;
    height: 17px;
  }
`;
export const FooterContactSocContainer = styled.div`
  margin-top: 17px;
  display: flex;
  gap: 10px;
`;
export const FooterContactSocItem = styled.a`
  border-radius: 30px;
  background: #00c8fa;
  display: flex;
  width: 33px;
  height: 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  & svg {
    width: 12px;
    height: 17px;
    width: 16.5px;
    height: 16px;
  }
  &:hover {
    background: #5dacff;
  }
`;
