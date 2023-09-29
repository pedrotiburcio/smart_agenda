import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Cartao = styled.div<Props>`
  background-color: ${(props) => (props.ativo ? '#fff' : '#182C61')};
  color: ${(props) => (props.ativo ? '#182C61' : '#25CCF7')};
  border: 1px solid ${(props) => (props.ativo ? '#FD7272' : '#25CCF7')};
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
