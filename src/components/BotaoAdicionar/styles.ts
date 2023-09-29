import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const BotaoAdd = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
