import styled from 'styled-components';
export const TimerSection = styled.section`
  padding-bottom: 50px;
  padding-top: 255px;
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
`;
export const TimerItem = styled.p`
  color: #81d4df;
  text-align: center;
  font-family: 'Manrope';
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  span {
    font-size: 30px;

    font-weight: 400;
  }
`;
