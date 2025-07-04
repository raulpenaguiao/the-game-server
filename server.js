const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 3000;
const lobbies = {};

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');



// Player Page
app.get('/player/:playerstring', async (req, res) => {
    console.log('Player string:', req.params.playerstring);
    console.log('Request received at:', new Date().toLocaleTimeString());
    const { playerstring } = req.params;
    // Assuming you have a database connection and Player model
    try {
        const playerInfo = await Player.findOne({ playerstring: playerstring });
        if (!playerInfo) {
            return res.status(404).send('Player not found');
        }
        const playerName = playerInfo.name;
    } catch (error) {
        console.error('Error fetching player info:', error);
        return res.status(500).send('Internal Server Error');
    }
    res.render('player', { playerstring });
});

// Index Page
app.get('/', (req, res) => {
    res.render('index');
});

// Create Lobby - activated through a click on the index page
app.post('/create-lobby', (req, res) => {
    const username = req.body.username;
    const lobbyId = uuidv4();
    lobbies[lobbyId] = {
        players: [username],
        started: false
    };
    res.redirect(`/lobby/${lobbyId}/${username}`);
});

// Lobby Page
app.get('/lobby/:lobbyId/:username', (req, res) => {
    const { lobbyId, username } = req.params;
    const lobby = lobbies[lobbyId];
    if (!lobby) return res.send('Lobby not found.');
    res.render('lobby', { lobbyId, username, players: lobby.players });
});

// Game Page
app.get('/game/:lobbyId/:username', (req, res) => {
    res.render('game', { lobbyId: req.params.lobbyId, username: req.params.username });
});

io.on('connection', (socket) => {
    console.log('A user connected at ', new Date().toLocaleTimeString());

    socket.on('joinLobby', ({ lobbyId, username }) => {
        socket.join(lobbyId);
        if (lobbies[lobbyId] && !lobbies[lobbyId].players.includes(username)) {
            lobbies[lobbyId].players.push(username);
        }
        io.to(lobbyId).emit('updatePlayers', lobbies[lobbyId].players);
    });

    socket.on('startGame', (lobbyId) => {
        lobbies[lobbyId].started = true;
        io.to(lobbyId).emit('gameStarted');
    });
});

http.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
