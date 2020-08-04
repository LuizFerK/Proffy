import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

interface ButtonProps {
  study?: boolean;
  giveclasses?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const Content = styled.div`
  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: initial;
  }
`;

export const Logo = styled.img`
  height: 8rem;

  @media (min-width: 1100px) {
    height: 100%;
  }
`;

export const Description = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;

  @media (min-width: 1100px) {
    font-size: 3.6rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const Button = styled(Link)<ButtonProps>`
  width: 15rem;
  height: 8rem;
  margin-right: 1.6rem;
  border-radius: 0.8rem;
  font-weight: 700;
  font-size: 1.8rem;
  font-family: Archivo;
  text-decoration: none;
  color: var(--color-button-text);
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  & + a {
    margin-right: 0;
  }

  ${props =>
    props.study &&
    css`
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    `}

  ${props =>
    props.giveclasses &&
    css`
      background: var(--color-secundary);

      &:hover {
        background: var(--color-secundary-dark);
      }
    `}

  @media (min-width: 1100px) {
    font-size: 2.4rem;
    width: 30rem;
    height: 10.8rem;
  }
`;

export const ButtonIcon = styled.img`
  width: 3rem;
  margin-right: 1rem;

  @media (min-width: 1100px) {
    width: 4rem;
    margin-right: 2.4rem;
  }
`;

export const Connections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;
