# Valentine Proposal Website 💕

A fun, interactive website to ask your special someone to be your Valentine!

## Features

- Beautiful gradient background with floating animations
- Interactive "Yes" and "No" buttons
- The "No" button playfully moves away when hovered
- Sweet success screen when "Yes" is clicked
- Fully responsive design
- Built with React and Vite

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- pnpm installed globally (`npm install -g pnpm`)

### Local Development

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## Deploy to Netlify

### Option 1: Using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 2: Using Netlify Website

1. Push this code to a GitHub repository

2. Go to [Netlify](https://netlify.com) and sign in

3. Click "Add new site" → "Import an existing project"

4. Connect your GitHub repository

5. Configure build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Install command: `pnpm install`

6. Click "Deploy site"

### Option 3: Drag and Drop

1. Build the project locally:
```bash
pnpm build
```

2. Go to [Netlify](https://netlify.com) and sign in

3. Drag and drop the `dist` folder onto the Netlify dashboard

## Customization

Feel free to customize:
- The question text in `src/App.jsx`
- Colors and styles in `src/index.css`
- Success message content
- Button text and behavior

## Good luck! 🎉

Hope your special someone says yes! ❤️
# valentine
# valentine
