# Twin3 Passport Dashboard

A modern React dashboard for tracking AI-Human Intelligence Fusion scores, built with TypeScript, Tailwind CSS, and Vite.

## Features

### 🧠 Twin Matrix Score
- **Overall Intelligence Score**: AI-Human fusion metrics
- **Creativity**: Creative thinking and innovation
- **Logic**: Analytical and reasoning abilities  
- **Empathy**: Emotional intelligence and understanding
- **Resilience**: Adaptability and stress management

### ❤️ Humanity Trust Score
- **Overall Trust Score**: Human values and ethics
- **Authenticity**: Genuine and honest behavior
- **Reliability**: Consistency and dependability
- **Transparency**: Open and clear communication
- **Ethics**: Moral principles and values

### 💼 Profession Traits
- **Dynamic Profession Selection**: Choose from multiple career paths
- **Skill Tracking**: Monitor professional development
- **Category-based Traits**: Technical, soft skills, leadership, domain expertise
- **Progress Visualization**: Interactive progress bars and metrics

### 📋 Task Management
- **Multiple Task Types**: Daily, weekly, achievement, and profession-specific
- **Progress Tracking**: Visual progress indicators
- **Reward System**: Earn points for different score categories
- **Filtering**: Filter by status and type

### 🔗 Connected Accounts
- **Platform Integration**: GitHub, LinkedIn, Twitter, Stack Overflow, Medium
- **Contribution Tracking**: Monitor professional activity
- **Auto-sync**: Automatic score updates from connected platforms
- **Connection Management**: Easy connect/disconnect functionality

### 🎁 Rewards Log
- **Activity Tracking**: Complete history of earned rewards
- **Filtering Options**: Filter by reward type and time period
- **Source Attribution**: Track where rewards came from
- **Statistics**: Visual summaries of earned points

## Design Features

- **🎨 Modern UI**: Dark theme with neon accents
- **🌈 Color-coded Themes**: Blue (Twin Matrix), Orange (Humanity Trust), Green (Profession)
- **✨ Neon Effects**: Glowing borders and gradient backgrounds
- **📱 Responsive Design**: Works on desktop, tablet, and mobile
- **🎭 Smooth Animations**: Engaging transitions and hover effects
- **⚡ Performance Optimized**: Fast loading and smooth interactions

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

Make sure you have Node.js (version 16 or higher) installed on your system.

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd twin3-passport-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the dashboard.

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── Dashboard/          # Main dashboard components
│   │   ├── Dashboard.tsx   # Main dashboard container
│   │   ├── WelcomeSection.tsx
│   │   ├── ScoreSection.tsx
│   │   ├── ProfessionSelector.tsx
│   │   ├── TaskSection.tsx
│   │   ├── ConnectedAccounts.tsx
│   │   └── RewardsLog.tsx
│   └── UI/                 # Reusable UI components
│       ├── CircularProgress.tsx
│       ├── TraitProgressBar.tsx
│       ├── TaskCard.tsx
│       ├── AccountCard.tsx
│       └── UpdateButton.tsx
├── hooks/                  # Custom React hooks
│   └── useDashboardData.ts
├── constants/              # App constants and themes
│   └── themes.ts
├── types/                  # TypeScript type definitions
│   └── index.ts
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles
```

## Customization

### Adding New Professions

Edit `src/constants/themes.ts` and add new profession options:

```typescript
{
  id: 'new-profession',
  name: 'New Profession',
  description: 'Description of the profession',
  icon: '🎯',
  traits: ['Trait 1', 'Trait 2', 'Trait 3', 'Trait 4']
}
```

### Modifying Themes

Update the color themes in `tailwind.config.js` and `src/constants/themes.ts` to customize the appearance.

### Adding New Task Types

Extend the `Task` type in `src/types/index.ts` and update the task generation logic in `src/hooks/useDashboardData.ts`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Twin3 Passport Dashboard** - Your journey to AI-Human collaboration excellence! 🚀
