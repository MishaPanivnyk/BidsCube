import styled from 'styled-components';
export const FormContainer = styled.section`
  .message {
    width: 814px !important;
    height: 53px !important;
    @media screen and (max-width: 1280px) {
      width: 292px !important;
      height: 77px !important;
    }
  }
  .form-row {
    @media screen and (max-width: 1280px) {
      max-width: 316px !important;
    }
  }
  .input-error {
    padding: 12px 0px 12px 16px;

    width: 250px;
    height: 24px;
    border-radius: 3px;
    background: #fbfbfb;
    border: none;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (max-width: 1280px) {
      width: 292px;
      height: 48px;
      padding: 12px 16px;
      /* padding-right: 0; */
      padding-left: 16px;
    }
    &::placeholder {
      color: #a9dae1;
      font-family: 'Stolzl';
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:hover::placeholder {
      color: #00c8fa;
      transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:focus::placeholder {
      color: #00c8fa;
      transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  .form-container {
    display: flex;
    /* height: 48px; */
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    @media screen and (max-width: 1280px) {
      flex-direction: column;
      /* height: 0; */
    }
  }
  .form-button {
    padding: 12px 184px;
    color: #505050;
    text-align: center;
    font-family: 'Stolzl';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 3px;
    background: #a9dae1;
    border: none;
    margin-top: 32px;
    box-shadow: 3px 3px 0px 0px #fff;
    cursor: pointer;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (max-width: 1280px) {
      padding: 12px 146px;
    }
  }
  .form-button:hover,
  :focus {
    color: #007afb;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .check-container {
    display: flex;
    /* align-items: center; */
    gap: 17px;
    justify-content: center;
    margin-top: 28px;
    @media screen and (max-width: 1280px) {
      margin-top: 24px;
      justify-content: space-around;
    }
  }
  .check-text {
    color: #fbfbfb;
    font-family: 'Stolzl';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 404px;
    @media screen and (max-width: 1280px) {
      width: 324px;
    }
  }
  .check-text-policy {
    color: #fbfbfb;
    font-family: 'Stolzl';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 404px;
    text-decoration-line: underline;
  }
`;
export const FormTitle = styled.h2`
  color: #fbfbfb;
  text-align: center;
  font-family: 'Stolzl';
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    width: 269px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const FormFlexContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 830px;
  height: 440px;
  padding: 52px 105px;
  border-radius: 3px;
  background: linear-gradient(204deg, #007afb 27.16%, #0074ee 92.16%), #007afb;
  @media screen and (max-width: 1280px) {
    max-width: 322px;
    height: 915px;
    padding: 52px 17px;
    margin-left: 0;
    margin-right: 0;
  }
`;
