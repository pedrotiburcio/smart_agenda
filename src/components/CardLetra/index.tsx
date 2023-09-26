import * as S from './styles'

export type Props = {
  descricao: string
}

const CardLetra = ({ descricao }: Props) => (
  <S.Cartao>
    <S.Letra>{descricao}</S.Letra>
  </S.Cartao>
)

export default CardLetra
