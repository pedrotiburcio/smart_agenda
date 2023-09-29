import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo?: string
  criterio: 'letra' | 'todas'
  valor?: enums.Alfabeto
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    modificarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    modificarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { modificarTermo, modificarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
