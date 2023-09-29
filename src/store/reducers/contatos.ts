import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Pedro Araújo',
      telefone: '(83) 999640684',
      email: 'pedrotiburcio10@gmail.com'
    },
    {
      id: 4,
      nome: 'Pedro Henri',
      telefone: '(83) 999640685',
      email: 'pedrohenri10@gmail.com'
    },
    {
      id: 2,
      nome: 'Zenilda Araújo',
      telefone: '(83) 987335888',
      email: 'zenildagaraujo@gmail.com'
    },
    {
      id: 3,
      nome: 'Elleeeem Ilana',
      telefone: '(83) 986936892',
      email: 'ellemilana.as@gmail.com'
    },
    {
      id: 5,
      nome: 'Beyonce',
      telefone: '(83) 998735643',
      email: 'beyon10@gmail.com'
    },
    {
      id: 6,
      nome: 'Zidane',
      telefone: '(83) 999612325',
      email: 'zidane@gmail.com'
    },
    {
      id: 7,
      nome: 'Tomas',
      telefone: '(83) 899335888',
      email: 'tomas@hotmail.com'
    },
    {
      id: 8,
      nome: 'Lizzie',
      telefone: '(83) 987748912',
      email: 'lizzie@msn.com'
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
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
