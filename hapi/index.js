const Hapi = require('@hapi/hapi')

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => '✨ Hello Word, I am testing the Hapi ;3'
  })

  await server.start()
  console.log('server running on %s', server.info.uri)

}

init()