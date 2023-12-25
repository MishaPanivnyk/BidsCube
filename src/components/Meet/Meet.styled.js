import styled from 'styled-components';
export const MeetContainer = styled.section`
  padding-bottom: 52px;
`;
export const MeetTitle = styled.h2`
  color: #505050;
  text-align: center;
  font-family: 'Stolzl';
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 400px;
  & span {
    color: #007afb;
  }
`;
export const MeetList = styled.ul`
  display: flex;
  gap: 70px;
  justify-content: center;
`;
export const MeetItem = styled.li`
  position: relative;
  border-radius: 3px;
  background: #e3f3ff;
  padding-top: 137px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 44px;
  & img {
    position: absolute;
    top: -348px;
  }
`;
export const MeetItemTitle = styled.h3`
  color: #007afb;
  font-family: 'Stolzl';
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
`;
export const MeetItemDesc = styled.p`
  color: #395053;
  font-family: 'Stolzl';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 28px;
`;
export const MeetItemBtn = styled.button`
  color: #fbfbfb;
  font-family: 'Stolzl';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 3px;
  background: #007afb;
  box-shadow: 3px 3px 0px 0px #00c4ef;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    border-radius: 3px;
    background: var(--background, #00c8fa);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const MeetItemContainer = styled.div`
  display: flex;
  gap: 71px;
  align-items: center;
`;
export const MeetItemSocContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const MeetItemSoc = styled.a`
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  .calendly-icon {
    width: 99px;
  }
  .linkedin-icon {
    width: 40px;
  }
  & svg {
    height: 40px;
    fill: #007afb;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    :focus {
      fill: #00c8fa;
      transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
