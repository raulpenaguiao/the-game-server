# The Game server

This is a simple game server that allows players to join and play a game. The server is built using Node.js and Express.
Backend uses MangoDB to store player data and game state.

## Features

- Players can join the game
- Player profile page
- Game lobby


## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/raulpenaguiao/the-game-server.git
   ```

2. Navigate to the project directory
   ```bash
   cd the-game-server
   ```
3. Install dependencies
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   npm install
   ```

4. Test version
   ```bash
   node -v
   npm -v
   ```



## Running the Server
1. Start the server
   ```bash
   node server.js
   ```
On a browser, navigate to `http://localhost:3000` to access the game server.

## Technologies Used
- Node.js
- Express.js
- MongoDB



# Todos
- [ ] Implement user authentication
- [ ] Add more game features
- [ ] Improve error handling




