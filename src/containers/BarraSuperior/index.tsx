import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardLetra from '../../components/CardLetra'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'
import { modificarTermo } from '../../store/reducers/filtro'
import { Botao, CampoPesquisa } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraSuperior = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Header>
      {mostrarFiltros ? (
        <>
          <CampoPesquisa
            type="text"
            placeholder="Buscar contato"
            value={termo}
            onChange={(evento) => dispatch(modificarTermo(evento.target.value))}
          />
          <S.ContainerLetras>
            <CardLetra
              valor={enums.Alfabeto.A}
              criterio={'letra'}
              descricao={enums.Alfabeto.A}
            />
            <CardLetra
              valor={enums.Alfabeto.B}
              criterio={'letra'}
              descricao={enums.Alfabeto.B}
            />
            <CardLetra
              valor={enums.Alfabeto.C}
              criterio={'letra'}
              descricao={enums.Alfabeto.C}
            />
            <CardLetra
              valor={enums.Alfabeto.D}
              criterio={'letra'}
              descricao={enums.Alfabeto.D}
            />
            <CardLetra
              valor={enums.Alfabeto.E}
              criterio={'letra'}
              descricao={enums.Alfabeto.E}
            />
            <CardLetra
              valor={enums.Alfabeto.F}
              criterio={'letra'}
              descricao={enums.Alfabeto.F}
            />
            <CardLetra
              valor={enums.Alfabeto.G}
              criterio={'letra'}
              descricao={enums.Alfabeto.G}
            />
            <CardLetra
              valor={enums.Alfabeto.H}
              criterio={'letra'}
              descricao={enums.Alfabeto.H}
            />
            <CardLetra
              valor={enums.Alfabeto.I}
              criterio={'letra'}
              descricao={enums.Alfabeto.I}
            />
            <CardLetra
              valor={enums.Alfabeto.J}
              criterio={'letra'}
              descricao={enums.Alfabeto.J}
            />
            <CardLetra
              valor={enums.Alfabeto.K}
              criterio={'letra'}
              descricao={enums.Alfabeto.K}
            />
            <CardLetra
              valor={enums.Alfabeto.L}
              criterio={'letra'}
              descricao={enums.Alfabeto.L}
            />
            <CardLetra
              valor={enums.Alfabeto.M}
              criterio={'letra'}
              descricao={enums.Alfabeto.M}
            />
            <CardLetra
              valor={enums.Alfabeto.N}
              criterio={'letra'}
              descricao={enums.Alfabeto.N}
            />
            <CardLetra
              valor={enums.Alfabeto.O}
              criterio={'letra'}
              descricao={enums.Alfabeto.O}
            />
            <CardLetra
              valor={enums.Alfabeto.P}
              criterio={'letra'}
              descricao={enums.Alfabeto.P}
            />
            <CardLetra
              valor={enums.Alfabeto.Q}
              criterio={'letra'}
              descricao={enums.Alfabeto.Q}
            />
            <CardLetra
              valor={enums.Alfabeto.R}
              criterio={'letra'}
              descricao={enums.Alfabeto.R}
            />
            <CardLetra
              valor={enums.Alfabeto.S}
              criterio={'letra'}
              descricao={enums.Alfabeto.S}
            />
            <CardLetra
              valor={enums.Alfabeto.T}
              criterio={'letra'}
              descricao={enums.Alfabeto.T}
            />
            <CardLetra
              valor={enums.Alfabeto.U}
              criterio={'letra'}
              descricao={enums.Alfabeto.U}
            />
            <CardLetra
              valor={enums.Alfabeto.V}
              criterio={'letra'}
              descricao={enums.Alfabeto.V}
            />
            <CardLetra
              valor={enums.Alfabeto.W}
              criterio={'letra'}
              descricao={enums.Alfabeto.W}
            />
            <CardLetra
              valor={enums.Alfabeto.X}
              criterio={'letra'}
              descricao={enums.Alfabeto.X}
            />
            <CardLetra
              valor={enums.Alfabeto.Y}
              criterio={'letra'}
              descricao={enums.Alfabeto.Y}
            />
            <CardLetra
              valor={enums.Alfabeto.Z}
              criterio={'letra'}
              descricao={enums.Alfabeto.Z}
            />
            <CardLetra criterio={'todas'} descricao="Todas" />
          </S.ContainerLetras>
        </>
      ) : (
        <Botao onClick={() => navigate('/')}>
          Voltar para a página de contatos
        </Botao>
      )}
    </S.Header>
  )
}

export default BarraSuperior
