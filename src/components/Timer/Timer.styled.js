import styled from 'styled-components';
export const TimerSection = styled.section`
  padding-bottom: 50px;
  padding-top: 255px;
  @media screen and (max-width: 1280px) {
    padding-top: 1296px;
  }
`;
export const TimerContainer = styled.div`
  border-radius: 3px;
  border: 2px solid #81d4df;
  display: flex;
  gap: 24px;
  max-width: 992px;
  padding-top: 34px;

  padding-bottom: 42px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1280px) {
    gap: 8px;
    max-width: 357px;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const TimerItem = styled.p`
  color: #81d4df;
  text-align: center;
  font-family: 'Manrope';
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 1280px) {
    font-size: 56px;
  }
  span {
    font-size: 30px;

    font-weight: 400;
    @media screen and (max-width: 1280px) {
      font-size: 28px;
      font-weight: 400;
    }
  }
`;
