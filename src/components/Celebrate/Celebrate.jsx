import { Container } from 'components/Container/Container';
import {
  CelebrateContainer,
  CelebrateTitle,
  CelebrateDesk,
  CelebrateImgContainer,
  CelebrateDeskHashtagContainer,
  CelebrateDeskHashtag,
} from './Celebrate.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import { Autoplay } from 'swiper/modules';
import img2 from 'img/img2.jpg';
import img1 from 'img/img1.jpg';
import img3 from 'img/img3.jpg';

export const Celebrate = () => {
  return (
    <CelebrateContainer>
      <Container>
        <CelebrateTitle>Celebrate creativity with BidsCube! </CelebrateTitle>
        <CelebrateDesk>
          The Cannes Festival of Creativity '23 is over! It was an incredible
          event the BidsCube team spent as the residential partner at the
          beautiful villa hosted by VideoWeek. We look forward to seeing our
          beloved partners in Cannes next year! <br /> <br />
          We look forward to seeing our beloved partners in Cannes next year!
        </CelebrateDesk>
        <CelebrateImgContainer>
          <Swiper
            slidesPerView={3}
            spaceBetween={54}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img2} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="img" />
            </SwiperSlide>
          </Swiper>
        </CelebrateImgContainer>
        <CelebrateDeskHashtagContainer>
          <CelebrateDeskHashtag>#digimarcon</CelebrateDeskHashtag>
          <CelebrateDeskHashtag>#uae</CelebrateDeskHashtag>
          <CelebrateDeskHashtag>#dubai</CelebrateDeskHashtag>
        </CelebrateDeskHashtagContainer>
      </Container>
    </CelebrateContainer>
  );
};
