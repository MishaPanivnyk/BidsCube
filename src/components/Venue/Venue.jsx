import { Container } from 'components/Container/Container';
import {
  VenueContainer,
  VenueContainerFlex,
  VenueTitle,
  VenueDeskContainer,
  VenueDeskTitle,
  VenueDesk,
} from './Venue.styled';
export const Venue = () => {
  return (
    <VenueContainer>
      <Container>
        <VenueContainerFlex>
          <VenueTitle>The Venue</VenueTitle>
          <VenueDeskContainer>
            <div>
              <VenueDeskTitle>About venue</VenueDeskTitle>
              <VenueDesk>
                Cologne Trade Fair – an international trade fair and exhibition
                center
              </VenueDesk>
            </div>
            <div>
              <VenueDeskTitle>Full adress</VenueDeskTitle>
              <VenueDesk>
                Germany, Cologne Koelnmesse GmbH Messeplatz ZIP 150679
              </VenueDesk>
            </div>
          </VenueDeskContainer>
        </VenueContainerFlex>
      </Container>
    </VenueContainer>
  );
};
