import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  box-shadow: inset 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px 16px 0px 16px;
  border-radius: 16px;
`

export const InfoContato = styled.p`
  font-size: 16px;
  line-height: 16px;
  color: #blue;
  margin-bottom: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px;
`

export const Botao = styled.button`
  font-size: 12px;
  background-color: ${variaveis.azul};
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
