import logoDark from '../../assets/images/logo_dark.svg';
import logoLight from '../../assets/images/logo_light.svg';

function Logo({ style }: { style: string }) {
  return (
    <div className="logo">
      <LogoImg src={style === 'light' ? logoLight : logoDark} />
    </div>
  );
}

function LogoImg({ src }: { src: string }) {
  return <img src={src} alt="nice logo" />;
}
export default Logo;
