import { useDispatch, useSelector } from 'react-redux'
import { modificarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import * as S from './styles'
import { RootReducer } from '../../store'

export type Props = {
  descricao: string
  criterio: 'letra' | 'todas'
  valor?: enums.Alfabeto
}

const CardLetra = ({ descricao, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todas') return contatos.itens.length
    else {
      return contatos.itens.filter(
        (item) => item.nome[0].toUpperCase() === valor
      ).length
    }
  }

  const filtrar = () => {
    dispatch(
      modificarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <>
      <S.Cartao ativo={ativo} onClick={filtrar}>
        <S.Letra>{descricao}</S.Letra>
        <S.Contador>{`(${contador})`}</S.Contador>
      </S.Cartao>
    </>
  )
}

export default CardLetra
