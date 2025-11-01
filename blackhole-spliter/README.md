# Blackhole Spliter - Software Review Website

A modern, responsive clone of a software download and review website, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Product Review Page**: Comprehensive product information with ratings, reviews, and specifications
- **Tab Navigation**: Switch between Review, Technical, and Edit sections
- **Pros & Cons**: Visual comparison of software advantages and disadvantages
- **FAQ Section**: Detailed answers to common questions
- **Author Bio**: Information about the reviewer
- **Related Products**: Suggestions for similar software
- **Responsive Sidebar**: Latest reviews, popular downloads, and category browsing
- **Newsletter Signup**: Stay updated with latest software releases
- **Comprehensive Footer**: Multiple navigation sections and language options

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
blackhole-spliter/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Site header with navigation
│   ├── Footer.tsx          # Site footer
│   ├── Sidebar.tsx         # Sidebar with reviews and downloads
│   ├── ProductHeader.tsx   # Product title and rating
│   ├── ReviewContent.tsx   # Main review content
│   ├── ProsConsSection.tsx # Pros and cons comparison
│   ├── FAQSection.tsx      # Frequently asked questions
│   ├── AuthorSection.tsx   # Author bio and reviews
│   ├── ScreenshotsSection.tsx # Product screenshots
│   ├── RelatedProducts.tsx # Related software suggestions
│   ├── TabNavigation.tsx   # Tab switching component
│   ├── Rating.tsx          # Star rating component
│   ├── Badge.tsx           # Badge component
│   └── ProductCard.tsx     # Product card component
└── public/                 # Static assets

```

## Components

### Layout Components
- **Header**: Navigation menu and breadcrumbs
- **Footer**: Links, newsletter signup, and copyright
- **Sidebar**: Latest reviews, popular downloads, categories

### Product Components
- **ProductHeader**: Product title, rating, and badges
- **ReviewContent**: Detailed product review
- **ProsConsSection**: Advantages and disadvantages
- **FAQSection**: Common questions and answers
- **AuthorSection**: Reviewer information
- **ScreenshotsSection**: Product screenshots
- **RelatedProducts**: Similar software recommendations

### UI Components
- **Rating**: Star rating display
- **Badge**: Status badges (Freeware, Safe, etc.)
- **TabNavigation**: Tab switching interface
- **ProductCard**: Product preview card

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Content
Update component files in the `components/` directory to modify content.

### Styling
Modify Tailwind classes in components or add custom CSS in `app/globals.css`.

## License

This project is created for educational purposes.
