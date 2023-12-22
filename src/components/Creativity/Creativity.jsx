import { Container } from 'components/Container/Container';
import {
  CreativityContainer,
  CreativityTitle,
  CreativityDesk,
  //   CreativityItemContainer,
  CreativityItemList,
  CreativityItem,
  CreativityItemTitle,
  CreativityItemDesc,
  CreativityItemBtn,
} from './Creativity.styled';
import img1 from 'img/Creativity1.png';
import img2 from 'img/Creativity2.png';
import img3 from 'img/Creativity3.png';
import sprite from 'img/sprite.svg';

export const Creativity = () => {
  return (
    <CreativityContainer>
      <Container>
        <CreativityTitle>Celebrate creativity with BidsCube! </CreativityTitle>
        <CreativityDesk>
          The Cannes Festival of Creativity '23 is over! It was an incredible
          event the BidsCube team spent as the residential partner at the
          beautiful villa hosted by VideoWeek. We look forward to seeing our
          beloved partners in Cannes next year!
        </CreativityDesk>
        <CreativityItemList>
          <CreativityItem>
            <img src={img1} alt="img1" />
            <CreativityItemTitle>Connect& network</CreativityItemTitle>
            <CreativityItemDesc>
              The Cannes Festival of Creativity '23 is over! It was an
              incredible event the BidsCube team spent
            </CreativityItemDesc>
            <CreativityItemBtn>
              Join us
              <svg>
                <use href={sprite + '#icon-Arrow'} />
              </svg>
            </CreativityItemBtn>
          </CreativityItem>
          <CreativityItem>
            <img src={img2} alt="img2" />
            <CreativityItemTitle>Discuss cooperation</CreativityItemTitle>
            <CreativityItemDesc>
              The Cannes Festival of Creativity '23 is over! It was an
              incredible event the BidsCube team spent
            </CreativityItemDesc>
            <CreativityItemBtn>
              Join us
              <svg>
                <use href={sprite + '#icon-Arrow'} />
              </svg>
            </CreativityItemBtn>
          </CreativityItem>
          <CreativityItem>
            <img src={img3} alt="img3" />
            <CreativityItemTitle>Explore new opportunities</CreativityItemTitle>
            <CreativityItemDesc>
              The Cannes Festival of Creativity '23 is over! It was an
              incredible event the BidsCube team spent
            </CreativityItemDesc>
            <CreativityItemBtn>
              Join us
              <svg>
                <use href={sprite + '#icon-Arrow'} />
              </svg>
            </CreativityItemBtn>
          </CreativityItem>
        </CreativityItemList>
      </Container>
    </CreativityContainer>
  );
};
