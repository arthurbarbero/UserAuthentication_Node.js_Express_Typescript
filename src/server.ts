import App from './app'

const server = new App().instance

server.listen(3333, () => console.log('🔮 magic happens on port 3333'))
