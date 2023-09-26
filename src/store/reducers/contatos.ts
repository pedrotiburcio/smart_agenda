import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Pedroooo Araújo',
      telefone: '(83) 999640684',
      email: 'pedrotiburcio10@gmail.com'
    },
    {
      id: 2,
      nome: 'Zenildaaaaa Araújo',
      telefone: '(83) 987335888',
      email: 'zenildagaraujo@gmail.com'
    },
    {
      id: 3,
      nome: 'Elleeeem Ilana',
      telefone: '(83) 986936892',
      email: 'ellemilana.as@gmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
