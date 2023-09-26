import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import ListaDeContatos from './containers/ListaDeContatos'
import BarraSuperior from './containers/BarraSuperior'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraSuperior />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
