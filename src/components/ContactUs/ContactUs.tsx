import { useForm } from 'react-hook-form';
import chatImage from '../../assets/images/chat.png';
import whatsappIcon from '../../assets/icons/whatsapp-icon.png';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
};

function ContactUs() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  function onSubmit(data: any) {
    console.log(data);
  }
  // Why is this is being highlighted?
  return (
    <div className="contact-us">
      <div className="container">
        <div
          className="flex"
          style={{ flexDirection: 'column', alignItems: 'center' }}
        >
          <img src={chatImage} alt="chat" style={{ marginBottom: '1rem' }} />
          <h2>Ainda tem dúvidas? Fale conosco!</h2>
          <div className="delimeter"></div>
        </div>
        <div
          className="flex flex-wrap"
          style={{ justifyContent: 'space-around', marginTop: '60px' }}
        >
          <div className="contact-us-block">
            <p>
              Ofereça um meio de comunicação direto. Pode ser um{' '}
              <a href="mailto:contato@email.com.br">contato@email.com.br</a>
            </p>
            <p>
              Ou crie um formulário ao lado que entrem em contato{' '}
              <span className="highlighted purple">
                o mais rápido possível!
              </span>
            </p>
            <div className="whatsapp-block">
              <a href="#">
                <img src={whatsappIcon} alt="whatsappIcon" />
                <div>Hey! Estamos no whatsapp!</div>
              </a>
            </div>
          </div>
          <div className="contact-us-block">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={`form-group ${errors.name && 'error'}`}>
                <label>Nome</label>
                <input
                  placeholder="Nome Sobrenome"
                  {...register('name', { required: true })}
                />
              </div>

              <div className={`form-group ${errors.email && 'error'}`}>
                <label>Email</label>
                <input
                  placeholder="nome@email.com.br"
                  {...register('email', {
                    required: true,
                    pattern: emailRegex,
                  })}
                />
              </div>

              <div className={`form-group ${errors.phoneNumber && 'error'}`}>
                <label>Telefone</label>
                <input
                  placeholder="21 9988-7766"
                  {...register('phoneNumber', { required: true })}
                />
              </div>
              <div className="flex" style={{ justifyContent: 'end' }}>
                <button type="submit" className="button filled">
                  Enviar!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
