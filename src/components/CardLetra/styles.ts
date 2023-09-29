import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Cartao = styled.div<Props>`
  background-color: ${(props) =>
    props.ativo ? `${variaveis.azulClaro}` : `${variaveis.azulRoyal}`};
  color: ${(props) =>
    props.ativo ? `${variaveis.preto}` : `${variaveis.brancoGelo}`};
  border: 1px solid ${variaveis.azulRoyal};
  padding: 4px 8px;
  margin-right: 12px;
  border-radius: 20%;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`
export const Letra = styled.span`
  font-size: 16px;
  font-weight: bold;
`

export const Contador = styled.span`
  font-size: 12px;
`
