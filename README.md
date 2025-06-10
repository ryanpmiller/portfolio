# Portfolio Website

A modern, responsive portfolio website built with React 19, TypeScript 5.8, and Material-UI 7, featuring comprehensive testing, modern build tooling with Vite, and AWS deployment capabilities.

## 🚀 Features

- **Modern Design**: Clean, professional interface with Material-UI 7 components
- **Responsive**: Fully responsive design that works on all devices
- **Type Safety**: Built with TypeScript 5.8 for better code quality and maintainability
- **Comprehensive Testing**: 44 test cases with 87%+ code coverage and DRY test utilities
- **Performance Optimized**: Vite build system with lightning-fast HMR and optimized production builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **AWS Ready**: Complete deployment infrastructure with CloudFormation
- **Code Quality**: ESLint + Prettier with zero errors/warnings
- **Modern Dependencies**: Latest versions of React 19, TypeScript 5.8, and React Router 7

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with improved performance and new features
- **TypeScript 5.8** - Latest TypeScript with enhanced type safety
- **Material-UI 7** - Latest React component library with Material Design
- **React Router DOM 7** - Modern client-side routing with latest features
- **Framer Motion 12** - Advanced animations and interactions

### Development & Build Tools
- **Vite 6** - Next-generation frontend build tool with fast HMR
- **ESLint 9** - Modern JavaScript/TypeScript linting with flat config
- **Prettier** - Code formatting for consistent style
- **Jest** - JavaScript testing framework
- **React Testing Library** - Testing utilities for React components
- **Web Vitals** - Performance monitoring

### AWS Infrastructure
- **S3** - Static website hosting
- **CloudFront** - Global CDN
- **CodeCommit** - Source code repository
- **CodeBuild** - Build and test automation
- **CodePipeline** - CI/CD pipeline
- **CloudFormation** - Infrastructure as Code

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher)
- AWS CLI (for deployment)

### Development Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
# or
npm run dev
```

The application will open at `http://localhost:5173` (Vite default port).

### Production Build

```bash
npm run build
npm run preview  # Preview production build locally
```

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML template (Vite entry)
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript main config
├── tsconfig.node.json      # TypeScript config for Node.js
├── jest.config.json        # Jest testing configuration
├── eslint.config.js        # ESLint flat config
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header/        # Navigation header with tests
│   │   └── Footer/        # Site footer with tests
│   ├── pages/             # Page components
│   │   ├── Home/          # Landing page with hero section
│   │   ├── About/         # About page with experience
│   │   ├── Projects/      # Projects showcase with filtering
│   │   └── Contact/       # Contact form with validation
│   ├── test-utils.tsx     # Shared testing utilities (DRY)
│   ├── theme.ts           # Material-UI theme configuration
│   ├── ThemeContext.tsx   # Theme context provider
│   ├── App.tsx            # Main application with routing
│   ├── index.tsx          # Application entry point
│   └── vite-env.d.ts      # Vite environment types
├── deployment/            # AWS deployment files
│   ├── cloudformation.yaml  # Infrastructure template
│   ├── deploy.sh           # Deployment script
│   └── README.md           # Deployment guide
└── package.json           # Dependencies and scripts
```

## 🧪 Testing

The project includes comprehensive test coverage with React Testing Library and shared test utilities for DRY principles:

### Run Tests
```bash
npm test                    # Interactive mode
npm run test:ci            # CI mode with coverage
npm run test:coverage      # Coverage report only
```

### Test Statistics
- **44 test cases** covering all components and pages
- **87.1% statement coverage** across the entire application
- **72.34% branch coverage** for thorough edge case testing
- **8 test suites** with comprehensive component testing
- **Shared test utilities** eliminating code duplication

### Test Architecture
- **`src/test-utils.tsx`** - Centralized testing utilities with:
  - `createMatchMedia()` - Mock matchMedia for responsive tests
  - `createMockLocalStorage()` - Mock localStorage functionality
  - `renderWithProviders()` - Render with theme and router context
  - `renderWithRouter()` - Simple router-only rendering
  - `TestEnvironment` class - Complete test environment setup

### Test Files
- `src/App.test.tsx` - Main app routing and navigation tests
- `src/ThemeContext.test.tsx` - Theme provider and switching tests
- `src/components/Header/Header.test.tsx` - Navigation and mobile menu tests
- `src/components/Footer/Footer.test.tsx` - Footer component and links tests
- `src/pages/Home/Home.test.tsx` - Landing page and hero section tests
- `src/pages/About/About.test.tsx` - About page content and animations tests
- `src/pages/Projects/Projects.test.tsx` - Project filtering and display tests
- `src/pages/Contact/Contact.test.tsx` - Form validation and submission tests

## 🔧 Code Quality & Development

This project uses modern tooling to ensure code quality and consistency.

### Code Quality Tools

#### ESLint 9 (Flat Config)
Modern JavaScript/TypeScript linting with:
- **TypeScript integration** - Full type-aware linting
- **React hooks rules** - Ensures proper React patterns
- **Custom rule sets** - Different rules for app code vs tests
- **Zero errors/warnings** - Strict quality standards

#### Prettier
Consistent code formatting across the entire codebase:
- **Automatic formatting** - Format on save and pre-commit
- **Consistent style** - No more formatting debates
- **Integration** - Works seamlessly with ESLint

### Available Scripts
```bash
# Development
npm start                  # Start Vite dev server (localhost:5173)
npm run dev               # Alternative dev server command
npm run build             # Production build
npm run preview           # Preview production build

# Code Quality
npm run lint              # Run ESLint
npm run lint:fix          # Auto-fix ESLint issues
npm run format            # Format code with Prettier
npm run format:check      # Check if code is formatted

# Testing
npm run test              # Interactive test mode
npm run test:ci           # CI mode with coverage
npm run test:coverage     # Coverage report only

# Type Checking
npm run type-check        # TypeScript validation

# Complete Validation
npm run check-all         # Run all quality checks (TypeScript + ESLint + Prettier + Tests)
```

### Environment Variables
The project uses Vite's environment variable system:

```bash
# Copy example environment file
cp .env.example .env.local

# Environment variables must be prefixed with VITE_
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=ryan.miller.p@gmail.com
```

## 🎨 Customization

### Theme Configuration
Customize the Material-UI theme in `src/theme.ts`:
```typescript
export const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    // ... your custom colors
  },
  typography: {
    // ... your typography settings
  }
});
```

### Content Updates
- **Home Page**: Update hero section, skills, and features in `src/pages/Home/Home.tsx`
- **About Page**: Modify experience, education, and achievements in `src/pages/About/About.tsx`
- **Projects Page**: Add your projects with images and descriptions in `src/pages/Projects/Projects.tsx`
- **Contact Page**: Update contact information and form handling in `src/pages/Contact/Contact.tsx`

### Environment Variables
Create `.env` files for different environments:
```bash
cp .env.example .env.local
# Edit with your configuration using VITE_ prefix
```

## 🚀 AWS Deployment

### Quick Deployment
```bash
# Make deployment script executable
chmod +x deployment/deploy.sh

# Deploy with domain and SSL
./deployment/deploy.sh -d portfolio.example.com -c arn:aws:acm:certificate-arn

# Deploy without SSL
./deployment/deploy.sh -d portfolio.example.com
```

### Manual Deployment
1. **Deploy Infrastructure:**
```bash
aws cloudformation deploy \
  --template-file deployment/cloudformation.yaml \
  --stack-name portfolio-website-stack \
  --parameter-overrides ParameterKey=DomainName,ParameterValue=portfolio.example.com \
  --capabilities CAPABILITY_IAM
```

2. **Build and Upload:**
```bash
npm run build
aws s3 sync build/ s3://your-bucket-name --delete
```

### Deployment Features
- **Infrastructure as Code** with CloudFormation
- **Automated CI/CD** with CodePipeline
- **Global CDN** with CloudFront
- **SSL/TLS encryption** support
- **Automated invalidation** for cache management

For detailed deployment instructions, see [deployment/README.md](deployment/README.md).

## 📊 Performance

### Vite Build System
- **Lightning-fast HMR** - Hot Module Replacement in milliseconds
- **Optimized bundling** - ESbuild for faster builds
- **Tree shaking** - Dead code elimination
- **Code splitting** - Automatic route-based splitting
- **Asset optimization** - Automatic image and asset optimization

### Performance Features
- **Lazy loading** of route components
- **Optimized bundle size** with modern build tools
- **Web Vitals monitoring** for performance metrics
- **CloudFront CDN** for global performance (when deployed)

### Build Analysis
```bash
npm run build
# Analyze bundle size
npx vite-bundle-analyzer dist
```

## 🔧 Available Scripts

### Development
- `npm start` / `npm run dev` - Vite development server (http://localhost:5173)
- `npm run build` - Production build
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run type-check` - TypeScript type checking
- `npm run lint` - ESLint code linting
- `npm run format` - Prettier code formatting
- `npm run check-all` - Complete quality validation suite

### Testing
- `npm test` - Interactive test runner
- `npm run test:ci` - CI test mode with coverage
- `npm run test:coverage` - Coverage report only

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Quality

### Modern Standards
- **TypeScript 5.8** - Latest type safety and developer experience
- **ESLint 9** - Modern flat config with TypeScript integration
- **Prettier** - Consistent code formatting
- **React Testing Library** - Best practices for component testing
- **Vite** - Modern build tooling with fast development experience

### Best Practices
- **Component composition** over inheritance
- **Custom hooks** for reusable logic
- **Proper error boundaries** for error handling
- **Accessibility considerations** with semantic HTML
- **Performance optimizations** with modern React patterns
- **DRY principles** in test utilities and shared code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📈 Monitoring

### Performance Monitoring
- Web Vitals integration
- CloudWatch metrics (when deployed to AWS)
- Real User Monitoring (RUM) ready

### Error Tracking
- React Error Boundaries
- Console error logging
- Production error reporting ready

## 🔒 Security

- **Content Security Policy** headers
- **HTTPS** enforcement via CloudFront
- **Secure headers** configuration
- **Environment variable** protection
- **No sensitive data** in client-side code

## 📋 Roadmap

### Completed ✅
- [x] **Migration to Vite** - Modern build system with fast HMR
- [x] **Dependency Updates** - React 19, TypeScript 5.8, Material-UI 7, React Router 7
- [x] **Test Infrastructure** - DRY test utilities with 87%+ coverage
- [x] **Code Quality** - ESLint 9 flat config + Prettier with zero errors
- [x] **Performance** - Optimized builds and bundle analysis

### Planned Features
- [ ] Dark mode toggle with system preference detection
- [ ] Blog section with markdown support
- [ ] Internationalization (i18n) for multiple languages
- [ ] Progressive Web App (PWA) features
- [ ] Advanced analytics integration
- [ ] Enhanced SEO optimizations
- [ ] Performance monitoring dashboard
- [ ] Automated dependency updates with Renovate

## 🙏 Acknowledgments

- **Vite team** for the incredible build tool and developer experience
- **Material-UI team** for the excellent component library
- **React team** for the amazing framework and React 19 improvements
- **TypeScript team** for enhanced type safety and developer tooling
- **AWS** for reliable cloud infrastructure
- **Open source community** for inspiration, tools, and best practices

---

**Built with ❤️ using modern web technologies**

*Last updated: June 2025 - Fully modernized with React 19, TypeScript 5.8, and Vite 6*

For questions or support, please open an issue or contact [your-email@example.com]