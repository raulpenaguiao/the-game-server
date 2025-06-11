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


# Troubleshooting


## 🪟 Running on Windows (Quick Guide)

### ✅ 1. Install Node.js (with npm)

Download and install Node.js from the official site:

👉 [https://nodejs.org](https://nodejs.org)

Choose the **LTS version** (recommended).

After installation, open **PowerShell or Command Prompt** and check:

```powershell
node -v   # Should show v20.x or similar
npm -v    # Should show v10.x or similar
```

> ❗ If `npm` gives an error like "`npm.ps1 cannot be loaded...`", you need to change PowerShell's execution policy.

---

### ⚙️ 2. Fix PowerShell Script Execution (if needed)

If you see this error:

```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded...
```

Run PowerShell as Administrator and type:

```powershell
Set-ExecutionPolicy RemoteSigned
```

Press `Y` to confirm.

---

### 📦 3. Install Project Dependencies

Navigate to the folder that contains `package.json` (likely `the-game-server`):

```powershell
cd path\to\the-game-server
npm install
```

---

### 🚀 4. Start the Server

```powershell
node server.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🛠 Common Issues

* **"npm is not recognized"**
  Ensure Node.js was installed correctly and restart your terminal or computer.

* **"package.json not found"**
  Make sure you're in the folder where `package.json` is.



## 🐧 Running on Debian (Quick Guide)

If you're on Debian and want to run this Node.js project, follow these steps to avoid package issues:

---

### ✅ 1. Install Node.js (Recommended Method)

Debian's default Node.js packages are often outdated or broken. Use **NodeSource** to install the latest LTS version:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

> If you already installed `nodejs` or `npm` via `apt` and it's broken, remove them first:
>
> ```bash
> sudo apt remove nodejs npm -y
> ```

---

### ✅ 2. Verify Installation

```bash
node -v   # Should be v20.x or newer
npm -v    # Should be v10.x or newer
```

---

### 📦 3. Install Project Dependencies

Make sure you're in the project directory (where `package.json` is):

```bash
cd the-game-server
npm install
```

---

### 🚀 4. Start the Server

```bash
node server.js
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

### ⚠️ Common Issues

* **"npm: command not found"**
  Make sure Node.js and npm are correctly installed (see Step 1).

* **GPG signature errors or 404s during `apt`**
  These come from outdated or broken APT sources. Use NodeSource instead of APT for Node.js.

* **Can't find `package.json`**
  Make sure you're inside the correct folder (`cd the-game-server`).



# Todos
- [ ] Implement user authentication
- [ ] Add more game features
- [ ] Improve error handling




