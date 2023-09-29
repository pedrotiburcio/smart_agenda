import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, ContainerContatos, Titulo } from '../../styles'
import { CampoCadastro } from './styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <ContainerContatos>
      <Titulo style={{ marginBottom: 40 }}>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <CampoCadastro
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome do contato"
        />
        <CampoCadastro
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="telefone"
          placeholder="Telefone do contato"
        />
        <CampoCadastro
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail do contato"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </ContainerContatos>
  )
}

export default Formulario
