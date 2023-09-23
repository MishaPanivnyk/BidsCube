import logo from 'img/Logo.png';
import { Link, LogoContainer } from './Logo.styled';

export const Logo = ({ onClick }) => {
  return (
    <LogoContainer>
      <Link to="/" onClick={onClick}>
        <img src={logo} alt="logo" />
      </Link>
    </LogoContainer>
  );
};
