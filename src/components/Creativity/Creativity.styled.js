import styled from 'styled-components';
export const CreativityContainer = styled.section`
  position: relative;
  padding-bottom: 302px;
  padding-top: 52px;
  background: #e3f3ff;
`;

export const CreativityTitle = styled.h2`
  color: #505050;
  text-align: center;
  font-family: 'Stolzl';
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
`;
export const CreativityDesk = styled.p`
  color: #505050;
  text-align: center;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 40px;
  max-width: 611px;
  margin-left: auto;
  margin-right: auto;
`;
export const CreativityItemContainer = styled.div`
  display: flex;
  gap: 45px;
`;
export const CreativityItemList = styled.ul`
  position: absolute;
  top: 92%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 30px;
  justify-content: center;
  img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 36px;
    margin-bottom: 26px;
    height: 148px;
  }
`;
export const CreativityItem = styled.li`
  border-radius: 3px;
  background: linear-gradient(204deg, #007afb 27.16%, #0074ee 92.16%);
  max-width: 262px;
  padding-bottom: 36px;
  padding-left: 24px;
  padding-right: 24px;
`;
export const CreativityItemTitle = styled.h3`
  color: #fbfbfb;
  font-family: 'Stolzl';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
  padding-right: 47px;
`;
export const CreativityItemDesc = styled.p`
  color: #fbfbfb;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 24px;
  max-width: 238px;
  /* padding-right: 34px; */
`;
export const CreativityItemBtn = styled.button`
  background: #2790ff;
  color: #fbfbfb;
  font-family: 'Stolzl';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding: 10px 16px;
  border: none;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    background: #00c8fa;
  }
  & svg {
    margin-left: 12px;
    width: 24px;
    height: 10px;
  }
`;
