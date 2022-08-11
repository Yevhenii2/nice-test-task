import React from 'react';
import Banner from './components/Banner/Banner';
import CarouselSection from './components/CarouselSection/CarouselSection';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CarouselSection />
      <ContactUs />
    </div>
  );
}

export default App;
