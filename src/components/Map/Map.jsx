import { Container } from 'components/Container/Container';
import { MapContainer } from './Map.styled';
export const Map = () => {
  return (
    <MapContainer>
      {/* <Container> */}
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.762520208308!2d6.97782977658664!3d50.94660477169122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25c3f081102f%3A0x734f38e5e1f044bb!2sCologne%20Fair!5e0!3m2!1suk!2sua!4v1695476934536!5m2!1suk!2sua"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* </Container> */}
    </MapContainer>
  );
};
