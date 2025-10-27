# Sony Website - React Vite Application

A modern, responsive website built with React and Vite, featuring a clean design inspired by Sony's brand aesthetic.

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern UI**: Clean, professional design with smooth animations
- **React Router**: Client-side routing for seamless navigation
- **Component-Based**: Modular React components for maintainability
- **CSS Styling**: Custom CSS with modern design patterns

## Pages & Components

### Navigation
- **Navbar**: Fixed navigation with mobile hamburger menu
- **Footer**: Comprehensive footer with links and company information

### Pages
- **Home/Hero**: Landing page with call-to-action sections
- **Login**: User authentication page with form validation
- **Resources**: Support resources and documentation
- **Contact**: Contact form and company information
- **FAQ**: Frequently asked questions with expandable answers

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Navbar.css
│   ├── Hero.jsx           # Hero section
│   ├── Hero.css
│   ├── Footer.jsx         # Footer component
│   └── Footer.css
├── pages/
│   ├── Login.jsx          # Login page
│   ├── Login.css
│   ├── Resources.jsx      # Resources page
│   ├── Resources.css
│   ├── Contact.jsx        # Contact page
│   ├── Contact.css
│   ├── FAQ.jsx           # FAQ page
│   └── FAQ.css
├── App.jsx               # Main app component with routing
├── App.css
├── main.jsx             # Entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Design Features

### Color Scheme
- Primary: #0066cc (Sony Blue)
- Secondary: #667eea to #764ba2 (Gradient)
- Background: #f8f9fa
- Text: #333, #666, #999

### Typography
- Clean, modern font stack
- Responsive font sizes
- Proper line heights for readability

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add corresponding CSS file
3. Add route in `src/App.jsx`

### Styling
- Global styles in `src/index.css`
- Component-specific styles in individual CSS files
- CSS Grid and Flexbox for layouts
- CSS custom properties for consistent theming

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Sony is a trademark of Sony Corporation.

