import { Container } from 'components/Container/Container';
import logo from 'img/Logo-hero.png';
import hero from 'img/Hero.png';
import sprite from 'img/sprite.svg';
import {
  HeroTitle,
  HeroPreDesk,
  HeroContainer,
  HeroPositionContianer,
  HeroPositionText,
  HeroDesk,
  HeroBtnContainer,
  HeroBtn,
} from './Hero.styled';
const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroPreDesk>
          Join <img src={logo} alt="logo" /> at
        </HeroPreDesk>
        <HeroTitle src={hero} alt="logo" />
        <HeroPositionContianer>
          <HeroPositionText>
            <svg>
              <use href={sprite + '#icon-date'} />
            </svg>
            19-20 June
          </HeroPositionText>
          <HeroPositionText>
            <svg>
              <use href={sprite + '#icon-location'} />
            </svg>
            Hyatt Regency Dubai
          </HeroPositionText>
        </HeroPositionContianer>
        <HeroDesk>
          The Cannes Festival of Creativity '23 is over! It was an incredible
          event the BidsCube team spent as the residential partner at the
          beautiful villa hosted by VideoWeek. We look forward to seeing our
          beloved partners in Cannes next year!
        </HeroDesk>
        <HeroBtnContainer>
          <HeroBtn>Book a meeting</HeroBtn>
        </HeroBtnContainer>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
