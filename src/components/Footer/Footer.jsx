import { Container } from 'components/Container/Container';
import {
  FooterContactContainer,
  FooterContactTitle,
  FooterContainer,
  FooterDesc,
  FooterDescContainer,
  ContainerFlex,
  FooterContactInfo,
  FooterContactSocContainer,
  FooterContactSocItem,
} from './Footer.styled';
import { Logo } from 'components/Logo/Logo';
import sprite from 'img/sprite.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <ContainerFlex>
          <FooterDescContainer>
            <Logo />
            <FooterDesc>
              BidsCube is a full-stack AdTech company developing programmatic
              ecosystems, connecting both publishers and advertisers
            </FooterDesc>
          </FooterDescContainer>
          <FooterContactContainer>
            <FooterContactTitle>Contact Us</FooterContactTitle>
            <FooterContactInfo href="mailto:support@bidscube.com">
              <svg>
                <use href={sprite + '#icon-mail'} />
              </svg>
              support@bidscube.com
            </FooterContactInfo>
            <FooterContactInfo href="tel:+381234567890">
              <svg>
                <use href={sprite + '#icon-tel'} />
              </svg>
              +38 123 456 78 90
            </FooterContactInfo>
            <FooterContactSocContainer>
              <FooterContactSocItem>
                <svg>
                  <use href={sprite + '#icon-Facebook'} />
                </svg>
              </FooterContactSocItem>
              <FooterContactSocItem>
                <svg>
                  <use href={sprite + '#icon-Twitter'} />
                </svg>
              </FooterContactSocItem>
              <FooterContactSocItem>
                <svg>
                  <use href={sprite + '#icon-Instagram'} />
                </svg>
              </FooterContactSocItem>
              <FooterContactSocItem>
                <svg>
                  <use href={sprite + '#icon-LinkedIn'} />
                </svg>
              </FooterContactSocItem>
            </FooterContactSocContainer>
          </FooterContactContainer>
        </ContainerFlex>
      </Container>
    </FooterContainer>
  );
};
