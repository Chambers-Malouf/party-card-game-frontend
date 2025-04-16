# Party Card Game – Frontend

This is the interactive frontend for the **Party Card Game**, a browser-based experience featuring animated cards and name-targeted prompts.

## Game Flow
1. **Home Screen**:
   - Quick Start (no names)
   - Add Players (enters `player-setup.html`)
2. **Game Setup**:
   - Select game mode and number of rounds
3. **Gameplay (`game.html`)**:
   - Card appears face-down and flips on click ( I have not incoporated card images for most playable cards yet)
   - Image-based cards with category style
   - Includes Leave Game + Start New Game buttons

## Name Handling
- Uses `localStorage` to store player names and session data
- If players are entered:
  - Duo and general cards insert `[player1]` / `[player2]` into prompts
- If Quick Start is selected:
  - Duo cards are skipped, and generic cards are shown

## 🛠️ Tech Stack
- HTML, CSS, JavaScript (vanilla)
- Deployed on **Vercel**
- Connects to backend via `/api/round` endpoint

---

🔗 Backend repo: [party-card-game](https://github.com/Chambers-Malouf/party-card-game)
