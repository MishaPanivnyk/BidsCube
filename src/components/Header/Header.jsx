import { Logo } from '../Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Container } from '../Container/Container';
import { HeaderBox } from './Header.styled';
export const Header = () => {
  return (
    <>
      <Container>
        <HeaderBox>
          <Logo />
          <Navigation />
        </HeaderBox>
      </Container>
    </>
  );
};
