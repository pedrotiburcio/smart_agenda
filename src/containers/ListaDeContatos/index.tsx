import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { ContainerContatos, Titulo } from '../../styles'
import { Lista } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (criterio === 'letra') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome[0].toUpperCase() === valor
      )
    }
    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }

    return contatosFiltrados
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e o termo: "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s) com a opção "Todas" ${complemento}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) com a letra '${valor}' ${complemento}`
    }
    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <ContainerContatos>
      <Titulo as="p" style={{ color: '#fff' }}>
        {mensagem}
      </Titulo>
      <Lista>
        {contatos.map((c) => (
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
