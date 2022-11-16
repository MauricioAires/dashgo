import { createServer, Model } from 'miragejs'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    routes() {
      this.namespace = 'api'

      /**
       * @description criar um delay porposital para simuar
       * uma requisição
       *  */
      this.timing = 750

      this.get('/users')
      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}
