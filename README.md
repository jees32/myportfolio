# Jees Jose - Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean and professional design
- **Fast Performance**: Optimized for speed
- **SEO Friendly**: Built with best practices
- **Interactive Elements**: Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/                 # App router pages
│   └── components/          # React components
├── public/                  # Static assets
├── .github/workflows/       # GitHub Actions
└── next.config.ts          # Next.js configuration
```

## 🚀 Deployment to GitHub Pages

### Prerequisites

1. **GitHub Repository**: Make sure your code is in a GitHub repository
2. **GitHub Pages Enabled**: Enable GitHub Pages in your repository settings

### Setup Steps

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/yourusername/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project locally** (to test):
   ```bash
   npm run build
   ```

4. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

### GitHub Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The deployment will start automatically when you push to the main branch

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build your Next.js application
- Generate static files
- Deploy to GitHub Pages automatically

Your site will be available at: `https://yourusername.github.io/repository-name/`

## 🏃‍♂️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section and experience
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Your skills
- `src/components/Contact.tsx` - Contact information

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component-specific styles are in each component file

## 🔧 Configuration

### Next.js Config
The `next.config.ts` file is configured for static export:
- `output: 'export'` - Generates static files
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages
- `images: { unoptimized: true }` - Required for static export

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful blue gradients
- **Hover Effects**: Interactive elements with smooth transitions
- **Professional Icons**: Lucide React icons throughout
- **Modern Typography**: Clean, readable fonts
- **Card Layouts**: Professional grid layouts

## 📄 Pages

- **Home** (`/`) - Hero section and about overview
- **Projects** (`/projects`) - Portfolio projects
- **Skills** (`/skills`) - Technical skills and expertise
- **Contact** (`/contact`) - Contact information

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js and Tailwind CSS**
