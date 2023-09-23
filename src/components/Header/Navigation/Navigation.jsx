import { Link, Nav } from './Navigation.styled';
export const Navigation = ({ onClick }) => {
  return (
    <Nav>
      <Link to="/" onClick={onClick}>
        About event
      </Link>
      <Link to="/" onClick={onClick}>
        Team
      </Link>
      <Link to="/" onClick={onClick}>
        Venue
      </Link>
      <Link to="/" onClick={onClick}>
        Join Us
      </Link>
    </Nav>
  );
};
