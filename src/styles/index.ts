import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mooli', sans-serif;
    list-style: none;
  }

  body {
    background-color: #f1f2f6;
  }
`

export const Container = styled.div`
  margin: 0 auto;
`
export const ContainerContatos = styled.main`
  padding: 24px 56px;
  height: 100vh;
  text-align: center;
`

export const Titulo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0px 24px;
  text-align: center;
`

export const CampoPesquisa = styled.input`
  padding: 8px;
  margin-bottom: 24px;
  border-radius: 8px;
  width: 50%;
  text-align: center;
  font-size: 20px;
`
export const Botao = styled.button`
  font-size: 14px;
  background-color: ${variaveis.azul};
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
