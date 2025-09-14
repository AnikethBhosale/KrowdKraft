# KrowdKraft

[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2024-blueviolet.svg)](https://hacktoberfest.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> A modern marketing agency website bridging brands to Gen Z culture through authentic community experiences.

## About KrowdKraft

KrowdKraft is a cutting-edge marketing agency that specializes in connecting brands with Gen Z and Millennial audiences. We create authentic community experiences through creator collaborations, event activations, and innovative digital campaigns.

Our website showcases our services, past collaborations, and provides a platform for potential partners to connect with us. Built with modern web technologies, it features dynamic content, interactive components, and a responsive design that reflects our commitment to staying ahead of digital trends.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) - Small, fast state management
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant forms with validation
- **Email Service**: [Nodemailer](https://nodemailer.com/) - Email sending functionality

## Getting Started

Follow these steps to set up the project locally for development.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)
- **Git** for version control

### Installation

1. **Fork the repository**
   
   Click the "Fork" button at the top right of this repository to create your own copy.

2. **Clone your fork**
   
   ```bash
   git clone https://github.com/YOUR_USERNAME/KrowdKraft.git
   cd KrowdKraft
   ```

3. **Install dependencies**
   
   ```bash
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   
   ```bash
   # Email configuration (optional for development)
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   
   # Social media links (optional)
   NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/krowdkraft/
   NEXT_PUBLIC_TWITTER_URL=https://x.com/KrowdKraft_
   NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/krowdkraft_/
   ```

5. **Start the development server**
   
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website running locally.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
KrowdKraft/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   │   ├── sections/        # Page section components
│   │   ├── ui/              # UI components (buttons, inputs, etc.)
│   │   └── common/          # Shared utility components
│   ├── data/                # Static data and content
│   ├── lib/                 # Utility functions
│   ├── store/               # State management
│   ├── styles/              # Global CSS styles
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets (images, icons)
└── docs/                    # Documentation files
```

## How to Contribute

We welcome contributions from developers of all skill levels! Whether you are fixing bugs, adding new features, improving documentation, or enhancing the user experience, your contributions are valuable.

### Quick Start for Contributors

1. Check out our [Issues](https://github.com/DarshanKrishna-DK/KrowdKraft/issues) page for open tasks
2. Look for issues labeled `good first issue` or `hacktoberfest` for beginner-friendly tasks
3. Read our detailed [Contributing Guide](./CONTRIBUTING.md) for the complete workflow
4. Join the discussion in issue comments before starting work

### Types of Contributions We Welcome

- **Bug Fixes**: Help us identify and fix issues
- **Feature Development**: Add new functionality or improve existing features
- **UI/UX Improvements**: Enhance the visual design and user experience
- **Performance Optimization**: Improve loading times and responsiveness
- **Documentation**: Improve README, add code comments, or create tutorials
- **Testing**: Add unit tests or integration tests
- **Accessibility**: Make the website more accessible to all users

For detailed contribution guidelines, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) to understand the standards we expect from our community.

## Support

If you have questions or need help getting started:

- Check existing [Issues](https://github.com/DarshanKrishna-DK/KrowdKraft/issues) for similar questions
- Create a new issue with the `question` label
- Review our [Contributing Guide](./CONTRIBUTING.md) for detailed information

## Acknowledgments

Thank you to all the contributors who help make KrowdKraft better! Your contributions, whether big or small, are greatly appreciated.

---

**Happy Contributing!** 🚀