# RHF + Zod Form Validation

A modern Next.js project demonstrating form validation using React Hook Form (RHF) with Zod schema validation, styled with shadcn/ui components and Tailwind CSS.

## 🚀 Features

- **React Hook Form**: Performant, flexible forms with easy-to-use validation
- **Zod Schema Validation**: TypeScript-first schema validation with static type inference
- **shadcn/ui Components**: Beautiful, accessible, and customizable UI components
- **Next.js 16**: Latest Next.js with App Router
- **TypeScript**: Full type safety across the application
- **Tailwind CSS v4**: Utility-first CSS framework for rapid UI development
- **Bun Runtime**: Fast JavaScript runtime and package manager

## 📦 Tech Stack

- **Framework**: Next.js 16.1.1
- **Runtime**: Bun
- **UI Library**: React 19.2.3
- **Form Management**: React Hook Form 7.69.0
- **Validation**: Zod 4.2.1
- **Component Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Lucide React
- **Type Safety**: TypeScript 5

## 📂 Project Structure

```
rhf-zod/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page with form example
├── components/            # React components
│   ├── forms/            # Custom form components
│   │   └── InputGroup.tsx # Reusable input group component
│   └── ui/               # shadcn/ui base components
│       ├── button.tsx    # Button component with variants
│       ├── input.tsx     # Input component
│       └── label.tsx     # Label component
├── lib/                  # Utility functions
│   └── utils.ts         # Helper utilities (cn function)
└── public/              # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- Node.js 20+ (alternative to Bun)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rhf-zod
```

2. Install dependencies:

```bash
bun install
```

### Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files.

### Build

Build the application for production:

```bash
bun run build
```

### Start Production Server

Run the production build:

```bash
bun start
```

### Linting

Run ESLint to check for code quality issues:

```bash
bun run lint
```

## 🎨 Components

### InputGroup

A reusable form input component that combines a label and input field with consistent styling.

**Props:**

- `type`: Input type (text, email, password)
- `label`: Label text
- `id`: Input ID and htmlFor attribute
- `className`: Optional container class names
- `labelClassName`: Optional label class names
- `inputClassName`: Optional input class names
- `placeholder`: Optional placeholder text

**Usage:**

```tsx
<InputGroup
  label="Email Address"
  type="email"
  id="email"
  placeholder="Enter your email"
/>
```

### UI Components

The project uses shadcn/ui components built on Radix UI primitives:

- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link) and sizes
- **Input**: Styled text input with focus states and validation styling
- **Label**: Accessible label component with proper associations

## 📝 Form Validation (To be implemented)

This project is set up to integrate React Hook Form with Zod validation:

1. Define a Zod schema for your form
2. Use `@hookform/resolvers` to connect Zod with React Hook Form
3. Apply validation rules and display error messages

**Example schema:**

```typescript
import { z } from "zod";

const formSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
```

## 🎯 Next Steps

To complete the form validation implementation:

1. Create a Zod schema for the registration form
2. Integrate React Hook Form with the form component
3. Add error message display for validation failures
4. Implement form submission handling
5. Add loading and success states

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

### Form Validation Resources

- [React Hook Form Documentation](https://react-hook-form.com/) - Complete guide to React Hook Form
- [Zod Documentation](https://zod.dev/) - TypeScript-first schema validation

### UI Component Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/) - Component library documentation
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository into Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Alternative Deployment Options

- **Docker**: Containerize the application
- **Netlify**: Alternative hosting platform
- **Self-hosted**: Use `bun start` after building

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
