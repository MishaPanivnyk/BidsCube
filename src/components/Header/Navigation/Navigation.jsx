import { Link, Nav } from './Navigation.styled';
// import hamburger from 'img/hamburger.png';

export const Navigation = ({ onClick }) => {
  return (
    <>
      {/* <button>
        <Hamburger src={hamburger} alt="menu" />
      </button> */}
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
    </>
  );
};
