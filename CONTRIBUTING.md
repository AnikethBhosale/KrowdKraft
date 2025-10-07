# Contributing to KrowdKraft

Thank you for your interest in contributing to KrowdKraft! We welcome contributions from developers of all experience levels. This guide will help you get started with contributing to our project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Finding Issues to Work On](#finding-issues-to-work-on)
- [Setting Up Your Development Environment](#setting-up-your-development-environment)
- [Making Changes](#making-changes)
- [Submitting Your Contribution](#submitting-your-contribution)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Getting Help](#getting-help)

## Getting Started

### Prerequisites

Before contributing, make sure you have:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)
- **Git** installed and configured
- A **GitHub account**
- Basic knowledge of **React**, **TypeScript**, and **Next.js**

### First-Time Contributors

If you are new to open source contribution:

1. Read through this entire contributing guide
2. Look for issues labeled `good first issue`
3. Start with small changes like documentation updates or bug fixes
4. Ask questions in issue comments if you need clarification

## Development Workflow

### Step 1: Find an Issue

1. Browse our [Issues](https://github.com/DarshanKrishna-DK/KrowdKraft/issues) page
2. Look for issues that match your skill level:
   - `good first issue` - Perfect for newcomers
   - `hacktoberfest` - Hacktoberfest-friendly issues
   - `bug` - Bug fixes needed
   - `enhancement` - New features or improvements
   - `documentation` - Documentation improvements

3. Read the issue description carefully
4. Check if anyone is already working on it
5. Comment on the issue to express your interest

**Creating New Issues**
If you found a bug or have a feature request that is not already reported:

- **For Bugs**: Use our [Bug Report Template](https://github.com/DarshanKrishna-DK/KrowdKraft/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+%5BBRIEF+DESCRIPTION%5D)
- **For Features**: Use our [Feature Request Template](https://github.com/DarshanKrishna-DK/KrowdKraft/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=Feature%3A+%5BBRIEF+DESCRIPTION%5D)

### Step 2: Fork and Clone

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**
   
   ```bash
   git clone https://github.com/YOUR_USERNAME/KrowdKraft.git
cd KrowdKraft
   ```

3. **Add the original repository as upstream**
   
   ```bash
   git remote add upstream https://github.com/DarshanKrishna-DK/KrowdKraft.git
   ```

### Step 3: Set Up Development Environment

1. **Install dependencies**
   
   ```bash
   npm install
   ```

2. **Create environment file**
   
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration (optional for most development)
   ```

3. **Start development server**
   
   ```bash
   npm run dev
   ```

4. **Verify setup**
   
   Open [http://localhost:3000](http://localhost:3000) to ensure everything works.

### Step 4: Create a Branch

Always create a new branch for your changes:

```bash
# Sync with upstream first
git fetch upstream
git checkout main
git merge upstream/main

# Create and switch to a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

**Branch naming conventions:**
- `feature/add-contact-form` - For new features
- `fix/navigation-mobile-bug` - For bug fixes
- `docs/update-readme` - For documentation
- `style/improve-button-design` - For UI/styling changes

## Making Changes

### Code Style Guidelines

We follow these coding standards:

#### TypeScript/JavaScript
- Use **TypeScript** for all new files
- Follow **ESLint** rules (run `npm run lint`)
- Use **meaningful variable names**
- Add **type annotations** where helpful
- Use **async/await** instead of promises when possible

#### React Components
- Use **functional components** with hooks
- Keep components **small and focused**
- Use **proper prop types** with TypeScript interfaces
- Follow **React best practices**

#### CSS/Styling
- Use **Tailwind CSS** classes
- Follow **mobile-first** responsive design
- Use **semantic class names**
- Maintain **consistent spacing** and colors

#### File Organization
- Place components in appropriate directories
- Use **index files** for cleaner imports
- Keep **related files together**
- Follow existing **folder structure**

### Example Code Structure

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  disabled = false 
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
```

### Commit Guidelines

Write clear, descriptive commit messages:

```bash
# Good commit messages
git commit -m "feat: add contact form validation"
git commit -m "fix: resolve mobile navigation issue"
git commit -m "docs: update installation instructions"
git commit -m "style: improve button hover effects"

# Use conventional commit format
# type(scope): description
# 
# Types: feat, fix, docs, style, refactor, test, chore
```

## Testing

### Running Tests

This project uses Jest and React Testing Library for unit testing.

To run the tests:
```bash
npm test
```

To run tests in watch mode (useful during development):
```bash
npm run test:watch
```

To run linting:
```bash
npm run lint
```

To check TypeScript compilation:
```bash
npx tsc --noEmit
```

To test build process:
```bash
npm run build
```

### Manual Testing

1. Test your changes in different browsers
2. Verify responsive design on mobile devices
3. Check accessibility with screen readers
4. Test form submissions and interactions
5. Ensure no console errors

## Submitting Your Contribution

### Step 1: Prepare Your Changes

1. **Test thoroughly**
   
   ```bash
   npm run lint
   npm run build
   ```

2. **Commit your changes**
   
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. **Push to your fork**
   
   ```bash
   git push origin your-branch-name
   ```

### Step 2: Create a Pull Request

1. **Go to your fork** on GitHub
2. **Click "New Pull Request"**
3. **Select the correct branches**:
   - Base: `main` (original repository)
   - Compare: `your-branch-name` (your fork)

4. **Fill out the PR template**:
   
   Our pull request template will automatically load and guide you through providing:
   - Description of changes made
   - Type of change (bug fix, feature, etc.)
   - Testing checklist
   - Screenshots for UI changes
   - Link to related issue
   - Code quality and accessibility checks
   
   Please fill out all relevant sections to help reviewers understand your contribution.

### Step 3: Address Review Feedback

1. **Respond to comments** promptly and professionally
2. **Make requested changes** in new commits
3. **Push updates** to the same branch
4. **Request re-review** when ready

## Documentation

### When to Update Documentation

- Adding new features or components
- Changing existing functionality
- Fixing bugs that affect user experience
- Updating installation or setup processes

### Types of Documentation

- **README.md** - Project overview and setup
- **CONTRIBUTING.md** - This file
- **Code comments** - Explain complex logic
- **Component documentation** - Props and usage examples

## Getting Help

### Before Asking for Help

1. **Read existing documentation**
2. **Search closed issues** for similar problems
3. **Check the codebase** for examples
4. **Try debugging** the issue yourself

### How to Ask for Help

1. **Create a new issue** with the `question` label
2. **Provide context**: What are you trying to do?
3. **Include details**: Error messages, screenshots, code snippets
4. **Be specific**: What have you already tried?

### Community Guidelines

- **Be respectful** and professional
- **Help others** when you can
- **Share knowledge** and learning experiences
- **Follow our** [Code of Conduct](./CODE_OF_CONDUCT.md)

## Recognition

Contributors will be recognized in several ways:

- **GitHub contributor list**
- **Special mentions** in release notes
- **Community shoutouts** for significant contributions
- **Maintainer status** for consistent, high-quality contributions

## Additional Resources

### Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

### Development Tools

- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

Thank you for contributing to KrowdKraft! Your efforts help make our project better for everyone.