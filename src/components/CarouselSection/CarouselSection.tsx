import { Swiper, SwiperSlide } from 'swiper/react';

import addButton from '../../assets/images/add-button.png';

import target from '../../assets/images/target.png';
import etherium from '../../assets/images/ethereum-coin.png';
import creditCards from '../../assets/images/credit-card.png';

const cardsContent = [
  {
    image: target,
    heading: 'Rápido',
    description:
      'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.',
  },
  {
    image: etherium,
    heading: 'Do seu jeito',
    description:
      'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.',
  },
  {
    image: creditCards,
    heading: 'Como você queria',
    description:
      'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.',
  },
];

function CarouselSection() {
  return (
    <div className="carousel-section">
      <div className="container">
        <div
          className="flex"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Um subtítulo para quem rolou até aqui!</h2>
          <div className="delimeter" style={{ marginBottom: '14px' }}></div>
          <p style={{ marginBottom: '-3px' }}>
            Aproveite esta seção para destacar os benefícios do seu produto ou
            serviço.
          </p>
          <p>Palavras-chave ajudam no SEO.</p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {cardsContent.map((cardContent) => (
            <SwiperSlide>
              <Card {...cardContent} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function Card({
  image,
  heading,
  description,
}: {
  image: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} />
      </div>
      <h3>{heading}</h3>
      <p>{description}</p>
      <div className="add-button-container">
        <a href="#">
          <img src={addButton} className="add-button" />
        </a>
      </div>
    </div>
  );
}

export default CarouselSection;
