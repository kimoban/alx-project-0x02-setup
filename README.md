# ALX Project 0x02 - Next.js Application

## Next.js Project Setup and Basics.

This is a modern Next.js application built with TypeScript and Tailwind CSS, featuring component-based architecture and API integration.

## Features

- **Modern Stack**: Built with Next.js 15.4.3, TypeScript, and Tailwind CSS
- **Component Architecture**: Reusable components with TypeScript interfaces
- **API Integration**: Fetches data from JSONPlaceholder API
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Navigation**: Multi-page application with header navigation

## Project Structure

alx-project-0x02/  
├── components/  
│     ├── common/  
│     │     ├── Button.tsx                            # Reusable button component  
│     │     ├── Card.tsx                              # Card component for content display  
│     │     ├── PostCard.tsx                          # Component for displaying posts  
│     │     ├── PostModal.tsx                         # Modal for creating posts  
│     │     └── UserCard.tsx                          # Component for displaying user info  
│     └── layout/  
│           └── Header.tsx                            # Navigation header component  
├── interfaces/  
│           └── index.ts                              # TypeScript interfaces  
├── pages/  
│     ├── _app.tsx                                  # Next.js app component  
│     ├──_document.tsx                              # Next.js document component  
│     ├── index.tsx                                 # Home page  
│     ├── about.tsx                                 # About page with button showcase  
│     ├── home.tsx                                  # Home page with cards and post modal  
│     ├── posts.tsx                                 # Posts page with API data  
│     └── users.tsx                                 # Users page with API data  
└── styles/  
      └── globals.css                               # Global styles  

## Components

### Button Component

- **Props**: size (small, medium, large), shape (rounded-sm, rounded-md, rounded-full), variant (primary, secondary, outline)  
- **Features**: Hover effects, focus states, disabled states  

### Card Component

- **Props**: title, content, isUserCreated (optional)  
- **Features**: Shadow effects, hover animations, user-created badge  

### PostCard Component

- **Props**: id, title, body, userId  
- **Features**: Post metadata display, character truncation, read more functionality  

### UserCard Component

- **Props**: User object with name, email, phone, website, address, company  
- **Features**: Comprehensive user information display, responsive layout  

## Pages

1. **Index Page** (`/`): Landing page with Next.js default styling and header navigation  
2. **Home Page** (`/home`): Features card grid and post creation modal  
3. **About Page** (`/about`): Button component showcase with different variants  
4. **Posts Page** (`/posts`): Displays posts fetched from JSONPlaceholder API  
5. **Users Page** (`/users`): Displays users fetched from JSONPlaceholder API  

## API Integration

The application integrates with [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for demo data:

- **Posts**: `/posts` endpoint for blog-style content  
- **Users**: `/users` endpoint for user information  

## Getting Started

### Prerequisites

- Node.js 18+  
- npm package manager  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kimoban/alx-project-0x02-setup.git
cd alx-project-0x02-setup
```

1. Install dependencies:

```bash
npm install
```

1. Run the development server:

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server  
- `npm run build` - Build for production  
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint  

## Technologies Used

- **Next.js 15.4.3** - React framework for production  
- **TypeScript** - Type-safe JavaScript  
- **Tailwind CSS** - Utility-first CSS framework  
- **React 19** - JavaScript library for user interfaces  

## Project Highlights

- **Type Safety**: Full TypeScript implementation with custom interfaces  
- **Responsive Design**: Mobile-first approach with Tailwind CSS  
- **Component Reusability**: Modular components with props-based customization  
- **State Management**: React hooks for local state management  
- **API Error Handling**: Comprehensive error states and loading indicators  
- **Code Organization**: Clean folder structure with separation of concerns  

## License

This project is part of the ALX Software Engineering program.

## Author

**kimoban** - [GitHub Profile](https://github.com/kimoban)
