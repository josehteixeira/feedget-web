# Feedget

<p align="center">
  <img alt="Feedget Mockup" src=".github/mockup.png" width="100%">
</p>

Feedget is a widget for feedback submission. It has three options for different feedback types, the user selects one of the types, writes something, can include a screenshot and then sends the feedback. The feedback will be received as an e-mail by the system admin.

You can see a demo running <a href='https://feedget-web-inky.vercel.app/'>here</a>.

# Running

1. Clone this repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create .env file on root setting the VITE_API_URL parameter pointing to the server
    ```bash
    VITE_API_URL='http://localhost:3333/'
    ```
4. Run
    ```bash
    npm run dev
    ```