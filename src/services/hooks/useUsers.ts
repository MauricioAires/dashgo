import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

async function getUsers(): Promise<User[]> {
  const { data } = await api.get('/users')

  const users = data.users.map((user) => {
    return {
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    /**
     * @description tempo para considerar a request como valida
     * aposar passar esse tempo será feito uma nova requisição
     */
    staleTime: 1000 * 5 /// $ seconds
  })
}
