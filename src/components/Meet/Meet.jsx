import { Container } from 'components/Container/Container';
import {
  MeetContainer,
  MeetTitle,
  MeetList,
  MeetItem,
  MeetItemTitle,
  MeetItemDesc,
  MeetItemBtn,
  MeetItemSocContainer,
  MeetItemSoc,
  MeetItemContainer,
} from './Meet.styled';
import img1 from 'img/Meet1.jpg';
import img2 from 'img/Meet2.jpg';
import sprite from 'img/sprite.svg';

export const Meet = () => {
  return (
    <MeetContainer>
      <Container>
        <MeetTitle>
          Meet BidsCube team at <span>#digimarcon</span>
        </MeetTitle>
        <MeetList>
          <MeetItem>
            <img src={img1} alt="Meet" />
            <MeetItemTitle>Dmytro Chebakov</MeetItemTitle>
            <MeetItemDesc>Chief Revenue Officer</MeetItemDesc>
            <MeetItemContainer>
              <MeetItemBtn>Book a meeting</MeetItemBtn>
              <MeetItemSocContainer>
                <MeetItemSoc>
                  <svg className="calendly-icon">
                    <use href={sprite + '#icon-Calendly'} />
                  </svg>
                </MeetItemSoc>
                <MeetItemSoc>
                  <svg className="linkedin-icon">
                    <use href={sprite + '#icon-linkedin'} />
                  </svg>
                </MeetItemSoc>
              </MeetItemSocContainer>
            </MeetItemContainer>
          </MeetItem>
          <MeetItem>
            <img src={img2} alt="Meet" />
            <MeetItemTitle>Max Yemelyntsev</MeetItemTitle>
            <MeetItemDesc>Chief Revenue Officer</MeetItemDesc>
            <MeetItemContainer>
              <MeetItemBtn>Book a meeting</MeetItemBtn>
              <MeetItemSocContainer>
                <MeetItemSoc>
                  <svg className="calendly-icon">
                    <use href={sprite + '#icon-Calendly'} />
                  </svg>
                </MeetItemSoc>
                <MeetItemSoc>
                  <svg className="linkedin-icon">
                    <use href={sprite + '#icon-linkedin'} />
                  </svg>
                </MeetItemSoc>
              </MeetItemSocContainer>
            </MeetItemContainer>
          </MeetItem>
        </MeetList>
      </Container>
    </MeetContainer>
  );
};
