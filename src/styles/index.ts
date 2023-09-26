import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mooli', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  margin: 0 auto;
`

export default EstiloGlobal
