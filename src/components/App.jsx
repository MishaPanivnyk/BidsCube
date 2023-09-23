import React from 'react';
import { Header } from './Header/Header';
import Hero from './Hero/Hero';
import { ContainerBack } from './App.styled';
import { Footer } from './Footer/Footer';
import { Map } from './Map/Map';
import { Venue } from './Venue/Venue';
export function App() {
  return (
    <div>
      <ContainerBack>
        <Header />
        <Hero />
      </ContainerBack>
      <Venue />
      <Map />
      <Footer />
    </div>
  );
}
