var io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('Novo Usuário conectado')
})