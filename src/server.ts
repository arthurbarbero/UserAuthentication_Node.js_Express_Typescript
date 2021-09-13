import App from './app'

// Getting the instance from App Class
const server = new App().instance

server.listen(3333, () => console.log('🔮 magic happens on port 3333'))
