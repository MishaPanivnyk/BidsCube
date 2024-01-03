import styled from 'styled-components';

export const HeroContainer = styled.section`
  padding-top: 79px;
  padding-bottom: 100px;
`;
export const HeroPreDesk = styled.p`
  color: #fbfbfb;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Manrope';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  line-height: normal;
  margin-bottom: 25px;

  & img {
    position: relative;
    top: -5px;
    cursor: pointer;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export const HeroTitle = styled.img`
  margin-bottom: 45px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  animation: slideInLeft 3s;
  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @media screen and (max-width: 1280px) {
    max-width: 357px;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const HeroPositionContianer = styled.div`
  display: flex;
  gap: 42px;
  justify-content: center;
  margin-bottom: 40px;
`;
export const HeroPositionText = styled.p`
  color: #fbfbfb;
  font-family: 'Manrope';
  display: flex;
  align-items: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  & svg {
    width: 16px;
    height: 14px;
    margin-right: 7px;
  }
`;
export const HeroDesk = styled.p`
  color: #fbfbfb;
  text-align: center;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 52px;
  margin-left: auto;
  margin-right: auto;
  max-width: 631px;
  @media screen and (max-width: 1280px) {
    max-width: 358px;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const HeroBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const HeroBtn = styled.button`
  color: #007afb;
  font-family: 'Stolzl';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-flex;
  padding: 12px 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: #fbfbfb;
  box-shadow: 3px 3px 0px 0px #00c4ef;
  border: none;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    color: #00c8fa;
  }
`;
