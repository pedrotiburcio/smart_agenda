import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #4bcffa;
  color: #fff;
  box-shadow: inset 2px 4px rgba(0, 0, 0, 0.5);
  padding: 16px 16px 0px 16px;
  border-radius: 16px;
`

export const ContainerInfo = styled.div`
  display: flex;
  margin: 8px 0px;
`

export const TituloInfo = styled.label`
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  color: #blue;
  margin-right: 8px;
`

export const ValorInfo = styled.input`
  border: none;
  resize: none;
  background-color: transparent;
  color: #000;
  font-size: 16px;
  line-height: 16px;
  width: 80%;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  margin-left: 8px;
`

export const MensagemEdicao = styled.em`
  font-size: 18px;
  font-weight: bold;
  color: #182c61;
`
