import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
  id: string
  name: string
  email: string
  created_at: string
}

interface GetUsersResponse {
  users: User[]
  totalCount: number
}

async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', {
    params: {
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user) => {
    return {
      ...user,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return { users, totalCount }
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    /**
     * @description tempo para considerar a request como valida
     * aposar passar esse tempo será feito uma nova requisição
     */
    staleTime: 1000 * 10 /// 10 segundos
  })
}
