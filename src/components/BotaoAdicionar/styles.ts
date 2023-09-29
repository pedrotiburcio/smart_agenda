import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const BotaoAdd = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.azulClaro};
  color: ${variaveis.preto};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media (max-width: 768px) {
    height: 48px;
    width: 48px;
    bottom: 24px;
    right: 24px;
    font-size: 32px;
  }
`
