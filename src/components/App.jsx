import React from 'react';
import { Header } from './Header/Header';
import Hero from './Hero/Hero';
import { ContainerBack } from './App.styled';
import { Footer } from './Footer/Footer';
import { Map } from './Map/Map';
import { Venue } from './Venue/Venue';
import { Celebrate } from './Celebrate/Celebrate';
import { Creativity } from './Creativity/Creativity';
import Timer from './Timer/Timer';
import { Meet } from './Meet/Meet';
import { Form } from './Form/Form';
export function App() {
  return (
    <div>
      <ContainerBack>
        <Header />
        <Hero />
      </ContainerBack>
      <Celebrate />
      <Creativity />
      <Timer />
      <Meet />
      <Form />
      <Venue />
      <Map />
      <Footer />
    </div>
  );
}
