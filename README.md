# Flight Tracker Service

A premium, real-time flight tracking application built with Next.js and the AviationStack API. 

This project was built and refined using **Antigravity**, a powerful agentic AI coding assistant designed by the Google Deepmind team.

## ✨ Features

- **Real-time Tracking**: Fetch live flight data using the AviationStack API.
- **Comprehensive Details**: Displays airline, flight number, route (with IATA codes), scheduled times, timezones, status, gate, and duration.
- **Security-First Architecture**: Implements a server-side proxy route (`/api/flights`) to securely handle API keys and prevent client-side exposure.
- **Premium Aesthetics**: A custom-built design system featuring:
  - Dark Mode
  - Glassmorphism effects
  - Responsive layout
  - Smooth micro-animations
- **Timezone Aware**: Displays times with their respective local timezones.

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.9.0 or higher recommended)
- An AviationStack API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PatriciaHuang99/Flight-tracker.git
   cd flight-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and add your key:
   ```env
   AVIATIONSTACK_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS Modules (no external libraries for maximum performance and design control)
- **API**: [AviationStack API](https://aviationstack.com/)

---
*Built with ❤️ by Antigravity*
