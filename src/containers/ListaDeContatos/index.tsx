import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { ContainerContatos, Lista } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <ContainerContatos>
      <Lista>
        {itens.map((c) => (
          <li key={c.id}>
            <Contato
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </Lista>
    </ContainerContatos>
  )
}

export default ListaDeContatos
