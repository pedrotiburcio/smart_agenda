import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraSuperior from '../../containers/BarraSuperior'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraSuperior mostrarFiltros />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
