import { Container } from 'components/Container/Container';
import { FormContainer, FormFlexContainer, FormTitle } from './Form.styled';
import React, { useState } from 'react';

export const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    preferredDay: '',
    preferredTime: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    preferredDay: '',
    preferredTime: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Your form submission logic goes here
    // Validate form fields and perform necessary actions
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  return (
    <FormContainer>
      <Container>
        <FormFlexContainer>
          <FormTitle>We're waiting for you!</FormTitle>
          <form onSubmit={handleSubmit} noValidate className="form-container">
            <div className="form-row">
              <input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleChange}
                className="input-error"
                placeholder="Name"
              />
              {formErrors.name && (
                <span className="error">{formErrors.name}</span>
              )}
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                className="input-error"
                placeholder="E-mail"
              />
              {formErrors.email && (
                <span className="error">{formErrors.email}</span>
              )}
            </div>

            <div className="form-row">
              <input
                type="text"
                name="company"
                id="company"
                value={formValues.company}
                onChange={handleChange}
                className="input-error"
                placeholder="Company"
              />
              {formErrors.company && (
                <span className="error">{formErrors.company}</span>
              )}
            </div>

            <div className="form-row">
              <input
                type="text"
                name="position"
                id="position"
                value={formValues.position}
                onChange={handleChange}
                className="input-error"
                placeholder="Position"
              />
              {formErrors.position && (
                <span className="error">{formErrors.position}</span>
              )}
            </div>

            <div className="form-row">
              <input
                type="text"
                name="preferredDay"
                id="preferredDay"
                value={formValues.preferredDay}
                onChange={handleChange}
                className="input-error"
                placeholder="Preferred day to meet"
              />
              {formErrors.preferredDay && (
                <span className="error">{formErrors.preferredDay}</span>
              )}
            </div>

            <div className="form-row">
              <input
                type="text"
                name="preferredTime"
                id="preferredTime"
                value={formValues.preferredTime}
                onChange={handleChange}
                className="input-error"
                placeholder="Preferred time to meet"
              />
              {formErrors.preferredTime && (
                <span className="error">{formErrors.preferredTime}</span>
              )}
            </div>

            <div className="form-row">
              <textarea
                name="message"
                id="message"
                value={formValues.message}
                onChange={handleChange}
                className="input-error message"
                placeholder="Your message"
              />
              {formErrors.message && (
                <span className="error">{formErrors.message}</span>
              )}
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="check-container">
                <label style={{ position: 'relative' }}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />

                  {isChecked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        stroke="#395053"
                      />
                      <rect x="3" y="3" width="10" height="10" fill="#395053" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        stroke="#FBFBFB"
                      />
                    </svg>
                  )}
                </label>

                <span className="check-text">
                  By sending this form I confirm the acceptance of BidsCube{' '}
                  <a href="/" className="check-text-policy">
                    privacy policy
                  </a>
                </span>
              </div>
              <button type="submit" className="form-button">
                Submit
              </button>
            </form>
          </form>
        </FormFlexContainer>
      </Container>
    </FormContainer>
  );
};
