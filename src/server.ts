import App from './app'

// Getting the instance from App Class
const server = new App().instance

server.listen(process.env.NODE_PORT, () => console.log(`🔮 magic happens on port ${process.env.NODE_PORT}`))
