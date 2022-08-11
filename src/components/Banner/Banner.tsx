import BusinessmanImage from '../../assets/images/businessman1.png';
import BurgerImage from '../../assets/images/burger-shape.png';

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="flex flex-wrap" style={{ padding: '60px 0' }}>
          <div className="banner-text">
            <h1>Um slogan chamativo aqui.</h1>
            <p style={{ fontSize: '18px' }}>
              Um texto sobre o seu produto ou serviço. Explique{' '}
              <span className="highlighted yellow">porque ele é valioso</span> e
              direcione o usuário ao próximo objetivo.
            </p>
            <div className="buttons-group">
              <div className="button filled">
                <a href="#">
                  <span>Eu quero!</span>
                </a>
              </div>
              <div className="button">
                <a href="#">
                  <span>Conhecer mais</span>
                </a>
              </div>
            </div>
          </div>
          <div className="banner-ilustration">
            <img src={BurgerImage} alt="burger" className="burger" />

            <img
              src={BusinessmanImage}
              alt="businessman"
              className="businessman"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
