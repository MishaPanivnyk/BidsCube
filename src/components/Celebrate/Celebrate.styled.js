import styled from 'styled-components';
export const CelebrateContainer = styled.section`
  padding-bottom: 60px;
  padding-top: 52px;
`;

export const CelebrateTitle = styled.h2`
  color: #505050;
  text-align: center;
  font-family: 'Stolzl';
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
  @media screen and (max-width: 1280px) {
    max-width: 382px;
  }
`;

export const CelebrateDesk = styled.p`
  color: #505050;
  text-align: center;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    max-width: 358px;
  }
`;
export const CelebrateDeskHashtagContainer = styled.div`
  display: flex;
  gap: 45px;
  justify-content: center;
  @media screen and (max-width: 1280px) {
    gap: 12px;
  }
`;
export const CelebrateImgContainer = styled.div`
  margin-bottom: 40px;
`;
export const CelebrateDeskHashtag = styled.p`
  color: #5070b6;
  text-align: center;
  font-family: 'Stolzl';
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
`;
