import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ClasseContato from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ClasseContato

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      {estaEditando && <S.MensagemEdicao>Editando...</S.MensagemEdicao>}
      <S.ContainerInfo>
        <S.TituloInfo>Nome:</S.TituloInfo>
        <S.ValorInfo
          disabled={!estaEditando}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </S.ContainerInfo>
      <S.ContainerInfo>
        <S.TituloInfo>Telefone:</S.TituloInfo>
        <S.ValorInfo
          disabled={!estaEditando}
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </S.ContainerInfo>
      <S.ContainerInfo>
        <S.TituloInfo>E-mail:</S.TituloInfo>
        <S.ValorInfo
          disabled={!estaEditando}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </S.ContainerInfo>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(editar({ nome, telefone, email, id }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => cancelarEdicao()}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
