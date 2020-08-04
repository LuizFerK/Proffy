import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container, Header, HeaderTexts, Footer } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Header>
        <img
          src="https://avatars0.githubusercontent.com/u/58568156?s=460&u=1dbea42a7d190d197957527fd0e454422312218a&v=4"
          alt="Luiz Fernando"
        />

        <HeaderTexts>
          <strong>Luiz Fernando</strong>
          <span>Química</span>
        </HeaderTexts>
      </Header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões
      </p>

      <Footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="submit">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
