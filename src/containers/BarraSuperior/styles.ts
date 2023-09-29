import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Header = styled.header`
  padding: 24px;
  background-color: ${variaveis.brancoGelo};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
`
export const ContainerLetras = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 4px;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 4px;
  }
`
