import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  Content,
  LogoContainer,
  Logo,
  Description,
  HeroImage,
  ButtonsContainer,
  Button,
  ButtonIcon,
  Connections,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src={logoImg} alt="Proffy" />
          <Description>Sua plataforma de estudos online.</Description>
        </LogoContainer>

        <HeroImage src={landingImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <Button to="/study" study>
            <ButtonIcon src={studyIcon} alt="Estudar" />
            Estudar
          </Button>

          <Button to="/give-classes" giveclasses>
            <ButtonIcon src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Button>
        </ButtonsContainer>

        <Connections>
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </Connections>
      </Content>
    </Container>
  );
};

export default Landing;
