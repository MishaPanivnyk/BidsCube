import styled from 'styled-components';
export const VenueContainer = styled.section`
  padding-bottom: 52px;
  padding-top: 52px;
`;
export const VenueContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 447px;
  @media screen and (max-width: 1280px) {
    gap: 15px;
  }
`;
export const VenueTitle = styled.h2`
  color: #505050;
  font-family: 'Stolzl';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 190px;
  @media screen and (max-width: 1280px) {
    font-size: 38px;
  }
`;
export const VenueDeskContainer = styled.div`
  display: flex;
  gap: 45px;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const VenueDeskTitle = styled.p`
  color: #00c8fa;
  font-family: 'Stolzl';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 11px;
`;
export const VenueDesk = styled.p`
  color: #505050;
  font-family: 'Stolzl';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 180px;
  @media screen and (max-width: 1280px) {
    max-width: 279px;
  }
`;
